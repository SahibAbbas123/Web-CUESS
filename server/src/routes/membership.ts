import { Router, Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../prisma";
import { sendMembershipEmail } from "../email";

export const membershipRouter = Router();

const Body = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  yearDept: z.string().optional(),
  message: z.string().optional()
});

membershipRouter.post("/", async (req: Request, res: Response) => {
  const parsed = Body.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid input", issues: parsed.error.flatten() });
  }
  const { name, email, yearDept, message } = parsed.data;

  try {
    const created = await prisma.membership.create({
      data: { name, email, yearDept, message }
    });

    // fire-and-forget (don’t block user)
    sendMembershipEmail({ name, email }).catch(() => {});

    return res.status(201).json({ id: created.id });
  } catch (err: any) {
    if (err.code === "P2002") {
      return res.status(409).json({ error: "Email already exists" });
    }
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});