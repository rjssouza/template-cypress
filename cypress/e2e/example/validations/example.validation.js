import validation from "../../../validations/general.validation";
import selector from "../page/example.selector";

const shoudHaveKitchenSinkTitle = () => {
  const expectedTitle = "Kitchen Sink";

  return validation.shoudContainText(selector.TITLE, expectedTitle);
};

export default { shoudHaveKitchenSinkTitle };
