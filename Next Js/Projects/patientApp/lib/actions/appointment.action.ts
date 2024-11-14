"use server";
import { ID, Query } from "node-appwrite";
import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { Appointment } from "@/types/appwrite.type";
import { revalidatePath } from "next/cache";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );
    return parseStringify(newAppointment);
  } catch (error) {
    console.log(error);
  }
};

export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );
    return parseStringify(appointment);
  } catch (error) {
    console.log(error);
  }
};

export const getRecentAppointmentList = async () => {
  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const count = (appointments.documents as Appointment[]).reduce(
      (accum, appointment) => {
        if (appointment.status === "scheduled") {
          accum.scheduledCount += 1;
        } else if (appointment.status === "pending") {
          accum.pendingCount += 1;
        } else if (appointment.status === "cancelled") {
          accum.cancelledCount += 1;
        }

        return accum;
      },
      initialCounts
    );

    const data = {
      totalCount: appointments.total,
      ...count,
      documents: appointments.documents,
    };

    return parseStringify(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateAppointment = async ({appointmentId,userId,appointment,type}: UpdateAppointmentParams) => {
try {
  const updatedAppointment = await databases.updateDocument(
    DATABASE_ID!,
    APPOINTMENT_COLLECTION_ID!,
    appointmentId,
    appointment
  )

  if (!updatedAppointment) {
    throw new Error("Appointment Not Found");
  }
  // SMS notification 
  revalidatePath('/admin')
  return parseStringify(updatedAppointment)
} catch (error) {
  console.log(error);
  
}
}