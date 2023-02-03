import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchImg } from '../helpers/ImagesFinderApi';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }
    setIsLoading(true);
    fetchImg(search, page).then(response => {
      if (!response.hits.length) {
        toast.error(`This request ${search} is not found`);

        return;
      }
      setImages(prevState =>
        page === 1 ? response.hits : [...prevState, ...response.hits]
      );
      setTotalHits(response.totalHits);
      setIsLoading(false);
    });
  }, [search, page]);

  const handelSearch = text => {
    setSearch(text);
    setPage(1);
  };

  const handelLoadMore = () => {
    setPage(prePage => prePage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handelSearch} />
      {isLoading && <Loader />}
      {images && <ImageGallery images={images} />}
      {totalHits > 12 && (
        <>
          <Button onLOardMore={handelLoadMore} />
          <ToastContainer />
        </>
      )}
    </>
  );
};
