import React from 'react'

const ImageUpload = () => {
    return (
        <div>
            <form>
                <input type="file" name="image" id="image" />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    )
}

export default ImageUpload