"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useAppKit } from "@reown/appkit/react"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { MarketingHero } from "@/components/marketing-hero"

export function Hero() {
  const { address, isConnected } = useAccount()
  const { open } = useAppKit()
  const [isClaiming, setIsClaiming] = useState(false)
  const [claimState, setClaimState] = useState<"idle" | "claimed" | "cooldown">("idle")

  const handleClaim = async () => {
    if (!isConnected || !address) {
      open()
      return
    }

    try {
      setIsClaiming(true)
      const res = await fetch("/api/claim-usdc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        if (res.status === 429) {
          setClaimState("cooldown")
        }
        toast({
          title: "Claim failed",
          description: data?.error || "Unable to claim test USDC.",
          variant: "destructive",
        })
        return
      }

      setClaimState("claimed")
      setTimeout(() => {
        setClaimState("idle")
      }, 3000)

      toast({
        title: "Test USDC claimed",
        description: "We sent 50 test USDC (mUSDC) to your wallet on Lisk Sepolia.",
      })
    } catch (err: any) {
      toast({
        title: "Claim failed",
        description: err?.message || "Unexpected error while claiming test USDC.",
        variant: "destructive",
      })
    } finally {
      setIsClaiming(false)
    }
  }

  return (
    <MarketingHero
      eyebrow="Zero Gas Fees • Instant Settlements"
      title="The Future of"
      highlight="Crypto Payments"
      subtitle="Send and receive crypto payments instantly with zero gas fees. Simple, secure, and accessible for everyone."
      badges={[
        { label: "Non-Custodial" },
        { label: "Zero Fees" },
        { label: "Instant" },
      ]}
      actions={
        <>
          <Link href="/pay">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 w-full sm:w-auto"
            >
              Connect Wallet
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/merchant">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 bg-transparent w-full sm:w-auto"
            >
              Sign Up as Merchant
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            disabled={isClaiming || claimState === "cooldown"}
            onClick={handleClaim}
            className="border-primary/40 text-primary hover:bg-primary/10 text-lg px-8 w-full sm:w-auto"
          >
            {claimState === "claimed"
              ? "Claimed"
              : claimState === "cooldown"
                ? "Come back in 24h"
                : isClaiming
                  ? "Claiming..."
                  : "Claim Test USDC"}
          </Button>
        </>
      }
    />
  )
}
