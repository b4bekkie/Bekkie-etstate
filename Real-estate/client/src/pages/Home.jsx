import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Sheringal Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <footer className='bg-gray-800 text-white p-8'>
      <div className='max-w-6xl mx-auto flex flex-col gap-8'>
        <div className='flex flex-wrap gap-4'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-4'>
              <FontAwesomeIcon icon={faHome} className='mr-2' />
              Quick Links
            </h2>
            <ul>
              <li><Link to='/'><FontAwesomeIcon icon={faChevronRight} className='mr-2' /> Home</Link></li>
              <li><Link to='/about'><FontAwesomeIcon icon={faChevronRight} className='mr-2' /> About Us</Link></li>
              <li><a href='mailto:iambekkie99@gmail.com'><FontAwesomeIcon icon={faChevronRight} className='mr-2' /> Contact Us</a></li>
            </ul>
          </div>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-4'>
              <FontAwesomeIcon icon={faBuilding} className='mr-2' />
              Categories
            </h2>
            <ul>
              <li><Link to='/search?type=sale'><FontAwesomeIcon icon={faChevronRight} className='mr-2' /> For Sale</Link></li>
              <li><Link to='/search?type=rent'><FontAwesomeIcon icon={faChevronRight} className='mr-2' /> For Rent</Link></li>
              <li><Link to='/search?offer=true'><FontAwesomeIcon icon={faChevronRight} className='mr-2' /> Special Offers</Link></li>
            </ul>
          </div>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-4'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
              Contact Us
            </h2>
            <p>23020 Sheringal Dir</p>
            <p>Email: info@sheringalestate.com</p>
            <p>Phone: +923211154143</p>
          </div>
        </div>
        <div className='border-t border-gray-600 pt-6'>
          <p>&copy; 2023 Sheringal Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
    
  );
}