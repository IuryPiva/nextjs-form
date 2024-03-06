"use server";
import type { Inputs } from "./page";

const memory: Inputs[] = [];

export async function save(inputs: Inputs) {
  memory.push(inputs);
  console.log(JSON.stringify(memory, null, 2));
}

export async function isNicknameAvailable(nickname: string) {
  if (memory.find((value) => value.nickname == nickname)) return false;
  return true;
}
