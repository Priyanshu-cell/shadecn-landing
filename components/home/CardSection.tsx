"use client"

import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

interface ApiResponse {
  status: string
  method: string
}

const CardSection = () => {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://dummyjson.com/test")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok")
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Fetch error:", err)
        setError("Failed to fetch API")
        setLoading(false)
      })
  }, [])

  return (
    <section className="flex justify-center py-10 bg-white">
      <Card className="w-[350px] shadow-lg">
        <CardHeader>
          <CardTitle>API Test Result</CardTitle>
        </CardHeader>

        <CardContent>
          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {data && (
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Status:</strong> {data.status}
              </p>
              <p>
                <strong>Method:</strong> {data.method}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

export default CardSection
