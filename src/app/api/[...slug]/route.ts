import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname.replace('/api/', '');
  const params = path.split('/');

  let [size, bgColor = 'CCCCCC', textColor = '444444'] = params;
  let [width, height] = size.split('x').map(Number);

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    width = 200;
    height = 200;
  }

  const { searchParams } = req.nextUrl;
  const text = searchParams.get('text') || `${width}x${height}`;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#${bgColor}" />
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" fill="#${textColor}" text-anchor="middle" dy=".3em">
        ${text}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}
