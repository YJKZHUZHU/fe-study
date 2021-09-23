/*
 * @Author: your name
 * @Date: 2021-09-22 20:30:30
 * @LastEditTime: 2021-09-22 20:34:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/09/22/5.ts
 */
interface RequestPending {
  state: "pending";
}

interface RequestError {
  state: "error";
  errorMsg: string;
}

interface RequestSuccess {
  state: "ok";
  pageContent: string;
}

type RequestState = RequestPending | RequestError | RequestSuccess;

interface State {
  // pageContent: string;
  // isLoading: boolean;
  // errorMsg?: string;
  currentPage: string;
  requests: { [page: string]: RequestState };
}
function getUrlForPage(url: string) {
  return url
}

function renderPage(state: State) {
  const { currentPage } = state;
  const requestState = state.requests[currentPage];
  switch (requestState.state) {
    case "pending":
      return `页面加载中~~~`;
    case "error":
      return `呜呜呜，加载第${currentPage}页出现异常了...${requestState.errorMsg}`;
    case "ok":
      `<div>第${currentPage}页的内容：${requestState.pageContent}</div>`;
  }
}

// 输出结果：页面加载中~~~
// console.log(renderPage({ isLoading: true, pageContent: "" }));
// 输出结果：<div>大家好，我是阿宝哥</div>
// console.log(renderPage({ isLoading: false, pageContent: "大家好，我是阿宝哥" }));

async function changePage(state: State, newPage: string) {
  state.requests[newPage] = { state: "pending" };
  state.currentPage = newPage;
  try {
    const response = await fetch(getUrlForPage(newPage));
    if (!response.ok) {
      throw new Error(`无法正常加载页面 ${newPage}: ${response.statusText}`);
    }
    const pageContent = await response.text();
    state.requests[newPage] = { state: "ok", pageContent };
  } catch (e) {
    state.requests[newPage] = { state: "error", errorMsg: "" + e };
  }
}