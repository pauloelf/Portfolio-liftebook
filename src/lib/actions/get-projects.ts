"use server";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";
import { ProjectFormType } from "@/types";

type ProjectsType = (ProjectFormType & {
  id: string;
  createdAt?: { seconds: string };
})[];

export async function getProjects(): Promise<ProjectsType> {
  const projectsRef = collection(db, "projects");
  const q = query(projectsRef, orderBy("createdAt", "desc"));

  const querySnap = await getDocs(q);

  return querySnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
