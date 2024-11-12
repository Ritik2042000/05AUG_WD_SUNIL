import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appoinmentId = (searchParams?.appointmentId as string) || "";
  const appoinment = await getAppointment(appoinmentId);

  const doctor = Doctors.find(
    (data) => data.name === appoinment.primaryPhysician
  );
  // console.log(doctor);

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center justify-center">
          <Image
            src={"/assets/gifs/success.gif"}
            alt="success"
            height={300}
            width={280}
            className=""
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">Appoinment Request</span> has
            been successfully submitted!
          </h2>
          <p>We will be in tocuh shortly to confirm. </p>
        </section>

        <section className="request-detalis">
          <p>Requested Appointment Detalis:</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt={doctor?.name!}
              height={100}
              width={100}
              className="size-6"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Success;
