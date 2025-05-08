"use server";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

type CertificatesType = {
  src?: string;
}[];

export async function getCertificates(): Promise<CertificatesType> {
  const certificatesRef = collection(db, "certificates");

  const querySnap = await getDocs(certificatesRef);

  return querySnap.docs.map((doc) => ({
    ...doc.data(),
  }));
}
