import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Placeholder Image Generator</h1>
      <p className="mb-8">A simple tool to generate placeholder images on the fly.</p>

      <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
      <p className="mb-4">Construct the URL as follows:</p>
      <code className="bg-gray-200 p-2 rounded">/api/widthxheight/background_color/text_color?text=custom_text</code>

      <ul className="list-disc list-inside my-4">
        <li><code>width</code> and <code>height</code> are required.</li>
        <li><code>background_color</code> and <code>text_color</code> are optional (hex codes, without the #).</li>
        <li><code>text</code> (query parameter) is optional.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Examples</h2>

      <h3 className="text-xl font-medium mb-2">Size Only</h3>
      <p className="mb-2"><code>/api/300x200</code></p>
      <Image src="/api/300x200" alt="Placeholder 300x200" width={300} height={200} className="border" />

      <h3 className="text-xl font-medium mt-4 mb-2">Size and Background Color</h3>
      <p className="mb-2"><code>/api/300x200/007BFF</code></p>
      <Image src="/api/300x200/007BFF" alt="Placeholder 300x200 with blue background" width={300} height={200} className="border" />

      <h3 className="text-xl font-medium mt-4 mb-2">Size, Background, and Text Color</h3>
      <p className="mb-2"><code>/api/300x200/007BFF/FFFFFF</code></p>
      <Image src="/api/300x200/007BFF/FFFFFF" alt="Placeholder 300x200 with blue background and white text" width={300} height={200} className="border" />

      <h3 className="text-xl font-medium mt-4 mb-2">With Custom Text</h3>
      <p className="mb-2"><code>/api/400x250?text=Hello+From+Gemini</code></p>
      <Image src="/api/400x250?text=Hello+From+Gemini" alt="Placeholder 400x250 with custom text" width={400} height={250} className="border" />
    </main>
  );
}
