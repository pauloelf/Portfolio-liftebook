"use server";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { PostFormType } from "@/types";

type PostType = PostFormType & {
  id: string;
  createdAt?: { seconds: string };
};

export async function getPost(id: string): Promise<PostType | null> {
  const postRef = doc(db, "posts", id);
  const docSnap = await getDoc(postRef);

  if (!docSnap.exists()) return null;
  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
}
