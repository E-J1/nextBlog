import { toggleOverflowHidden } from "./toggleOverflowHidden";
import { REDUCER_TYPES } from "@/reducers/types.enums";
import { IConfig, IPayload } from "@/reducers/types.interface";

export const toggleModal = (
  dispatch: React.Dispatch<IPayload>,
  config?: IConfig
) => {
  toggleOverflowHidden("body");
  if (dispatch) dispatch({ type: REDUCER_TYPES.toggleModal, config });
};
