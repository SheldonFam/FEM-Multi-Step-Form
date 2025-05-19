import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="flex flex-col gap-10 max-w-[449px] mx-auto justify-center items-center">
      <div>
        <Image
          src={"/images/icon-thank-you.svg"}
          alt="thank you"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-2xl font-bold text-[#051B33]">Thank you!</h1>
        <p className="text-base text-[#9CA2B0] text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support @loremgaming.com to us.
        </p>
      </div>
    </div>
  );
}
