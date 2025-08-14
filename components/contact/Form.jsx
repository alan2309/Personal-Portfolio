"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000, // 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            "Message sent successfully! I'll get back to you soon ",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error("Failed to send message!", {
            id: toastId,
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Alankrit",
      from_name: data.Name,
      reply_to: data.Email,
      message: data.Message,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={variants}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="
      max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
            className="w-full p-4 rounded-xl shadow-lg text-white bg-black/40 backdrop-blur-sm border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/80 placeholder-gray-400 transition-all duration-300 hover:border-yellow-400/60"
            type="text"
            placeholder="✨ Your Name"
            {...register("Name", {
              required: "This field is required!",
              minLength: {
                value: 3,
                message: "This field must be at least 3 characters long",
              },
            })}
          />
        {errors.Name && (
          <span className="inline-block self-start text-accent">
            {errors.Name.message}
          </span>
        )}
         <motion.input
            className="w-full p-4 rounded-xl shadow-lg text-white bg-black/40 backdrop-blur-sm border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/80 placeholder-gray-400 transition-all duration-300 hover:border-yellow-400/60"
            type="email"
            placeholder="📧 Your Email"
            {...register("Email", { required: "This field is required!" })}
          />
        {errors.Email && (
          <span className="inline-block self-start text-accent">
            {errors.Email.message}
          </span>
        )}
        <motion.textarea
            rows={4}
            className="w-full p-4 rounded-xl shadow-lg text-white bg-black/40 backdrop-blur-sm border border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-400/80 placeholder-gray-400 resize-none transition-all duration-300 hover:border-yellow-400/60"
            placeholder="💭 Your Message..."
            {...register("Message", {
              required: "This field is required!",
              maxLength: {
                value: 500,
                message: "This field must be at most 500 characters long",
              },
              minLength: {
                value: 10,
                message: "This field must be at least 50 characters long",
              },
            })}
          />
        {errors.Message && (
          <span className="inline-block self-start text-accent">
            {errors.Message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your Message"
          className="relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl shadow-2xl bg-gradient-to-r from-yellow-400/30 to-orange-500/30 border-2 border-yellow-400/60 hover:from-yellow-400/40 hover:to-orange-500/40 hover:border-yellow-400/80 backdrop-blur-sm text-yellow-400 hover:text-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 cursor-pointer font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden w-full sm:w-auto"
          type="submit"
        />
      </motion.form>
    </>
  );
}
