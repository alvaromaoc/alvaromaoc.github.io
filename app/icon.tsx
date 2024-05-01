import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 256,
    height: 256,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    padding: 0,
                    margin: 0,
                    fontSize: 20,
                    background: 'linear-gradient(to right bottom, #10b981, #00b98b, #00b995, #00b99d, #14b8a5)',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                }}
            ></div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}