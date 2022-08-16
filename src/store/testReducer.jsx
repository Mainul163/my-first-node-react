import { DELETE_USER_DATA, GET_TEST_DATA, POST_USER_DATA, SINGLE_USER_DATA } from "./testAction";

const testData = {
  testDataList: [],
  testSingleDataList:[]
};
export const demo = (state = testData, action) => {
  switch (action.type) {
    case GET_TEST_DATA:
      return { ...state, testDataList: action.testData };
    case DELETE_USER_DATA:
      return { ...state, testDataList: action.payload };
      case SINGLE_USER_DATA:
        return{...state,testSingleDataList:action.payload}
    default:
      return state;
  }
};
