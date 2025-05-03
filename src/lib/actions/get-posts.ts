"use server";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";
import { PostFormType } from "@/types";

type PostsType = (PostFormType & {
  id: string;
  createdAt?: { seconds: string };
})[];

export async function getPosts(): Promise<PostsType> {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("createdAt", "desc"));

  const querySnap = await getDocs(q);

  return querySnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
