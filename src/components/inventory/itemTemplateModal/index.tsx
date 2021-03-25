import React, { Dispatch, SetStateAction, FC, memo } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Weapon, Armor, Item } from "@prisma/client";
import classnames from "classnames";

import { Error } from "@/components/Error";
import {
  buildApiRoute,
  buildInventoryRoute,
  ApiActions,
} from "@/network/routes";
import { inventory } from "@/network/react-query-keys";
import { Modal } from "@/components/shared/Modal";
import { ItemType } from "@/redux/features/inventory/consts";

interface AddModalProps {
  readonly isOpen: boolean;
  readonly setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  readonly item: Weapon | Armor | Item | null;
  readonly itemType: ItemType;
}

export const ItemTemplateModal: FC<AddModalProps> = memo(
  ({ isOpen, setIsModalOpen, item, itemType }) => {
    const queryClient = useQueryClient();

    const deleteItem = useMutation(
      (id: number) =>
        axios.delete(
          buildApiRoute([buildInventoryRoute(itemType), ApiActions.Delete]),
          { data: { id } }
        ),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries(inventory);
        },
      }
    );

    const handleDeleteClick = (id: number) => {
      deleteItem.mutate(id);
    };

    if (!item) {
      return (
        <Modal isOpen={isOpen} outerModalHandler={setIsModalOpen}>
          <Error />
        </Modal>
      );
    }

    return (
      <Modal isOpen={isOpen} outerModalHandler={setIsModalOpen}>
        <div className={classnames("flex", "justify-center")}>
          <button
            className={classnames("text-sm")}
            type="button"
            onClick={() => {}}
          >
            Get!
          </button>
          <button
            className={classnames("text-sm")}
            type="button"
            onClick={() => handleDeleteClick(item.id)}
          >
            Delete!
          </button>
        </div>
      </Modal>
    );
  }
);
