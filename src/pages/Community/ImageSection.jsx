import * as s from './PostPageStyled.jsx';
import { memo } from 'react';

const ImageSection = ({ imageFiles, setImageFiles }) => {
  return (
    <s.ImgSection>
      {imageFiles.map((url, i) => (
        <div
          key={URL.createObjectURL(url)}
          style={{ position: 'relative' }}
        >
          <s.PreviewImg
            src={URL.createObjectURL(url)}
            width="160"
            height="160"
            alt={`image${i}`}
          />
          <svg
            width="10"
            height="10"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              right: '0.3rem',
              top: '0.3rem',
              zIndex: '2',
            }}
            onClick={() => {
              const deletedImageList = imageFiles.filter(
                (imageUrl) => imageUrl !== url,
              );
              setImageFiles(deletedImageList);
            }}
          >
            <path
              d="M14.4433 0.0955087C14.5707 -0.0318362 14.7771 -0.0318362 14.9045 0.0955087C15.0318 0.222854 15.0318 0.42932 14.9045 0.556665L7.96116 7.5L14.9045 14.4433C15.0318 14.5707 15.0318 14.7771 14.9045 14.9045C14.7771 15.0318 14.5707 15.0318 14.4433 14.9045L7.5 7.96116L0.556665 14.9045C0.42932 15.0318 0.222853 15.0318 0.0955081 14.9045C-0.031836 14.7771 -0.031836 14.5707 0.0955081 14.4433L7.03884 7.5L0.095509 0.556665C-0.0318359 0.42932 -0.0318359 0.222854 0.095509 0.0955087C0.222854 -0.0318362 0.429321 -0.0318362 0.556666 0.0955087L7.5 7.03884L14.4433 0.0955087Z"
              fill="#000000"
            />
          </svg>
        </div>
      ))}
    </s.ImgSection>
  );
};

export default memo(ImageSection);
