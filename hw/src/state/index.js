import Store from "../lib/store/store";
import state from "../state/state";
import mutations from "../state/mutations";
import actions from "../state/actions";

export default new Store({
  actions,
  mutations,
  state
});
