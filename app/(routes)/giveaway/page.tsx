"use client";

import landing from "@/public/Giveaway.jpeg";
import bg from "@/public/back.png";
import card from "@/public/Bg-Cards.jpg";
import A from "@/public/A.png";
import B from "@/public/B.png";
import P1 from "@/public/p1.png";
import P2 from "@/public/p2.png";
import P3 from "@/public/p3.png";
import P4 from "@/public/p4.png";
import React, { useState } from "react";
import Image from "next/image";

const GiveAway = () => {
  const [isFlipped, setIsFlipped] = useState(true);

  return (
    <div>
      {/* Section 1 */}
      <section className="relative min-h-screen w-full">
        <Image
          src={landing} // Replace with your actual image path
          alt="Background 1"
          fill
          style={{ objectFit: "fill" }}
        />
      </section>

      {/* Repeat the pattern for Sections 2-5 */}
      {/* Section 2 */}
      <div>
        <section className="relative min-h-screen w-full">
          <Image
            src={bg} // Replace with your actual image path
            alt="Background 1"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="relative text-white px-16 pb-3">
            <div>
              <h1 className="text-5xl text-center font-bold pt-10 text-red-500 opacity-80">
                Terms and Conditions for Giveaway Participation
              </h1>
              <hr className="my-8 mx-32 h-1 bg-white rounded-lg" />
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Eligibility: </h2>
                <p className="text-md">
                  The giveaway is open to individuals who are{" "}
                  <span className="font-bold">18</span> or older.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Entery Methods: </h2>
                <p className="text-md">
                  Participants can enter the giveaway using one of two methods:
                  A - Random Draw: any individual who makes a purchase through
                  an affiliate link on the website during the giveaway period
                  will be automatically entered into a random draw. B -
                  Qualifying Purchase: participant who make specific qualifying
                  purchases will be entered into a draw for highly desirable sex
                  products
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  Information Collection:{" "}
                </h2>
                <p className="text-md">
                  Participants may be required to provide the following
                  information Full Name, Shipping Address, Email Address.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  Use of Email Addresses:{" "}
                </h2>
                <p className="text-md">
                  Email addresses will be used solely for the purpose of
                  contacting winners and obtaining shipping information for
                  prize fulfillment.
                  <br />
                  Email addresses will be removed from the database one month
                  after the conclusion of the giveaway
                  <br />
                  Email addresses will not be sold or shared with third parties
                  and will not be used for any purpose other than the
                  administration of giveaways.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Prize Fulfillment: </h2>
                <p className="text-md">
                  Winners will be selected randomly based on their entry method.
                  <br />
                  Winners will be notified via email address provided during
                  entry.
                  <br />
                  Winners must respond to the notification within{" "}
                  <span className="font-bold">1 week</span> to claim their
                  prize.
                  <br />
                  Prize fulfillment will involve contacting winners for shipping
                  addresses and sending prizes directly to the provided
                  addresses.
                  <br />
                  Prizes will be delivered discreetly and will not include any
                  expilcit branding on the packaging.
                  <br />
                  The shipping process will prioritize privacy, and packages
                  will not reveal the contents or nature of the products inside.
                </p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  Privacy and Security:{" "}
                </h2>
                <p className="text-md">
                  Participant information will be treated with the utmost
                  privacy and will be stored securely.
                  <br />
                  <span className="font-bold">EnchantHer</span> will take
                  reasonable measures to protect participant information from
                  unauthorized access.
                </p>
              </div>
              {/* <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  General Conditions:
                </h2>
                <p className="text-md">
                  By participant
                </p>
              </div> */}
            </div>
          </div>
        </section>
      </div>

      {/* Section 3 */}
      <section className="relative min-h-screen w-full">
        <Image
          src={card} // Replace with your actual image path
          alt="Background 1"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="relative text-white px-16 py-10">
          {/* Cards going in here */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* card 1*/}
              <div className="group bg-neutral-800 cursor-pointer rounded-xl p-3 space-y-6 transform transition-all hover:scale-110 hover:shadow-lg mt-8 mx-2">
                <div>
                  <h1 className="text-2xl text-center font-bold pt-4">
                    Entry Method: A
                  </h1>
                  <hr className="my-4 mx-36 bg-white rounded-lg" />
                  <div>
                    <p className="mx-3 text-lg mt-auto text-gray-300 transition-all group-hover:text-white">
                      Participants can enter the giveaway using one of two
                      methods:
                      <br />
                      <br />A - Random Draw: any individual who makes a purchase
                      through an affiliate link on the website during the
                      giveaway period will be automatically entered into a
                      random draw.
                    </p>
                  </div>
                  <Image
                    src={A}
                    alt={"Method A"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              {/* card 1*/}
              {/* card 2 */}
              <div
                className={`group bg-neutral-800 cursor-pointer rounded-xl p-3 space-y-6 transform transition-all hover:scale-110 hover:shadow-lg mt-8 mx-2 ${
                  isFlipped ? "flip" : ""
                }`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Content for card 2 - Front */}
                {isFlipped ? (
                  <div>
                    <h1 className="text-2xl text-center font-bold pt-4">
                      Entry Method: B
                    </h1>
                    <hr className="my-4 mx-36 bg-white rounded-lg" />
                    <div>
                      <p className="mx-3 text-lg mt-auto text-gray-300 transition-all group-hover:text-white">
                        Participants can enter the giveaway using one of two
                        methods:
                        <br />
                        <br />B - Qualifying Purchase: participants who make
                        specific qualifying purchases{" "}
                        <span className="font-bold">
                          (click for more info...)
                        </span>{" "}
                        will be entered into a draw for highly desirable sex
                        products.
                      </p>
                    </div>
                    <Image
                      src={B}
                      alt={"Method B"}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  // Content for card 2 - Back (change as needed)
                  <div>
                    <h1 className="text-2xl text-center font-bold pt-4">
                      Entry Method: B
                    </h1>
                    <hr className="my-4 mx-36 bg-white rounded-lg" />

                    {/* Add relevant image for the back of the card */}
                    <div className="my-10">
                      <div className="flex mb-4">
                        <Image
                          src={P1}
                          alt={"New Image"}
                          width={150}
                          height={150}
                          className="rounded-lg"
                        />
                        <p className="px-8">
                          FlapJoy Flex: Experience delight at your fingertips
                          with FlapJoy Flex
                        </p>
                      </div>

                      <div className="flex mb-4">
                        <Image
                          src={P2}
                          alt={"New Image"}
                          width={150}
                          height={150}
                          className="rounded-lg"
                        />
                        <p className="px-8">
                          Passion Pulse Thrusting Vibrator: Ignite your desires
                          with Passion Pulse, the Vibrator Thrusting Dildo.
                        </p>
                      </div>

                      <div className="flex mb-4">
                        <Image
                          src={P3}
                          alt={"New Image"}
                          width={150}
                          height={150}
                          className="rounded-lg"
                        />
                        <p className="px-8">
                          Eternal Ecstasy Thrusting Rabbit Vibrator: Elevate
                          Your Intimate Moments with 3-in-1 Pleasure
                        </p>
                      </div>

                      <div className="flex mb-4">
                        <Image
                          src={P4}
                          alt={"New Image"}
                          width={150}
                          height={150}
                          className="rounded-lg"
                        />
                        <p className="px-8">
                          Elysian Rose 3IN1 Upgrade Stimulator: Experience
                          euphoria with the Elysian Rose 3IN1 Upgrade Stimulator
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* card 2 */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiveAway;
