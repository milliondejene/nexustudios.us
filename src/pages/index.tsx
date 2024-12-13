import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-semibold text-indigo-600 mb-4">
          Welcome to NexusStudio
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Innovating with every project—your go-to platform for next-generation web development and media solutions.
        </p>
        <p className="text-sm text-gray-500">
          Let's create something amazing together.
        </p>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Welcome to NexusStudio</title>
