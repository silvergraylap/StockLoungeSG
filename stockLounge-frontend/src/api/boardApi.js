import axiosApi from ".";
const env = import.meta.env.VITE_ENV;

// 게시글 리스트 가져오기
export const getBoard = async (category) => {
  try {
    const response = await axiosApi.get("/board", {
      params: {
        category: category,
      },
    });
    return response.data;
  } catch (error) {
    if (env === "development") console.error(error);
    throw error;
  }
};

// 게시글 등록하기
export const writeBoard = async (boardData) => {
  try {
    const response = await axiosApi.post("/board/write", boardData, {
      // headers로 감싸서 폼데이터 형식으로 보냄
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (env === "development") console.error(error);
    throw error;
  }
};

// 특정 게시글 가져오기
export const getBoardById = async (id) => {
  try {
    const response = await axiosApi.get(`/board/${id}`);
    return response.data;
  } catch (error) {
    if (env === "development") console.error(error);
    throw error;
  }
};

// 게시글 삭제
export const deleteBoard = async (id) => {
  try {
    const response = await axiosApi.delete(`/board/${id}`);
    return response;
  } catch (error) {
    if (env === "development") console.error(error);
    throw error;
  }
};

// 게시글 수정
export const updateBoard = async (id, boardData) => {
  try {
    const response = await axiosApi.put(`/board/${id}`, boardData, {
      // headers로 감싸서 폼데이터 형식으로 보냄
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (env === "development") console.error(error);
    throw error;
  }
};
