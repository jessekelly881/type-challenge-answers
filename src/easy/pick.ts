/**
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
 */

type MyPick<Obj, K extends keyof Obj> = { [k in K]: Obj[k] };

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

export const todo: TodoPreview = {
	title: "Clean room",
	completed: false,
};
