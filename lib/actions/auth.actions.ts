"use server";

import { headers } from "next/headers";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async (
  {
    fullName,
    email,
    password,
    country,
    investmentGoals,
    riskTolerance,
    preferredIndustry
  }: SignUpFormData
) => {
  try {
    const response = await auth.api.signUpEmail({
      body: { email, password, name: fullName }
    });

    if (response) {
      await inngest.send({
        name: 'app/user.created',
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry
        }
      })
    }

    return {
      success: true,
      message: 'Sign up successful',
      data: response
    }
  } catch (err) {
    console.error('Sign up failed', err);
    return {
      success: false,
      message: 'Sign up failed'
    }
  }
}

export const signOut = async () => {
  try {
    await auth.api.signOut({
      headers: await headers()
    });
  } catch (err) {
    console.error("Sign Out Failed", err);
    return {
      success: false,
      message: "Sign Out Failed"
    }
  }
}

export const signInWithEmail = async (
  {
    email,
    password,
  }: SignInFormData
) => {
  try {
    const response = await auth.api.signInEmail({
      body: { email, password }
    });

    return {
      success: true,
      message: 'Sign in successful',
      data: response
    }
  } catch (err) {
    console.error('Sign in failed', err);
    return {
      success: false,
      message: 'Sign in failed'
    }
  }
}