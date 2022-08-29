/** (Type) Todo : 할 일(Todo)으로, Todo에 대한 Type 정의
 * @param id : 사용자의 id
 * @param content : Todo의 내용
 * @param done : Todo의 완료 여부
 * @param category : Todo의 카테고리
 * @param tags : Todo와 관련된 태그 목록
 */
type Todo = {
  id: string;
  content: string;
  done: boolean;
  category: string;
  tags?: string[];
};

/** (Type) TODO_LIST : 할 일 목록(Todo List)으로, Todo List에 대한 Type 정의 */
type TODO_LIST = Todo[];

/** (Type) CREATE_TODO : 할 일을 추가하는 함수에 대한 Call Signature 정의 */
type CREATE_TODO = (todo: Todo, todo_list: TODO_LIST) => TODO_LIST;

/** (Type) READ_TODO : 할 일을 조회하는 함수에 대한 Call Signature 정의 */
type READ_TODO = (todo_list: TODO_LIST) => TODO_LIST;

/** (Type) UPDATE_TODO : 할 일을 수정하는 함수에 대한 Call Signature 정의 */
type UPDATE_TODO = (todo: Todo, todo_list: TODO_LIST) => TODO_LIST;

/** (Type) DELETE_TODO : 할 일을 삭제하는 함수에 대한 Call Signature 정의 */
type DELETE_TODO = (todo: Todo, todo_list: TODO_LIST) => TODO_LIST;

/** (function) createTodo : 할 일을 추가하는 함수
 * @param todo 추가할 할 일
 * @param todo_list todo을 추가할 대상 Todo 목록
 */
const createTodo: CREATE_TODO = (todo, todo_list) => {
  todo_list.push(todo);
  return todo_list;
};

/** (function) readTodo : 할 일을 조회하는 함수
 * @param todo_list 반환할 Todo 목록
 * @returns 조회 결과로 todo 목록 반환
 */
const readTodo: READ_TODO = (todo_list) => {
  console.log(todo_list);
  return todo_list;
};

/** (function) updateTodo : 할 일을 수정하는 함수
 * @param todo 수정할 할 일
 * @param todo_list todo을 수정할 대상 Todo 목록
 * @returns 수정 완료 된 todo 목록 반환
 */
const updateTodo: UPDATE_TODO = (todo, todo_list) => {
  // update ...
  return todo_list;
};

/** (function) deleteTodo : 할 일을 삭제하는 함수
 * @param todo 삭제할 todo
 * @param todo_list todo을 삭제할 대상 Todo 목록
 * @returns 삭제 완료 된 todo 목록 반환
 */
const deleteTodo: DELETE_TODO = (todo, todo_list) => {
  // delete ...
  return todo_list;
};

/** (value) todo1 : 할 일 1 */
let todo1: Todo = {
  id: "id",
  content: "타입스크립트 공부하기",
  done: false,
  category: "공부",
  tags: ["TS", "학습"],
};

/** (value) todo2 : 할 일 2 */
let todo2: Todo = {
  id: "id2",
  content: "리액트 공부하기",
  done: false,
  category: "공부",
  tags: ["리액트", "학습"],
};

/** (value) todoList : 할 일 목록이며, 할 일(Todo)들을 담고 있는 배열. */
let todoList: TODO_LIST = [todo1, todo2];
