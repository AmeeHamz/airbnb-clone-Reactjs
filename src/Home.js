import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/c357f318-75f5-4ee4-ae78-6f14a3fee69d.jpg?im_w=720"
                title="Walk 2 Burj Khalifa or Netflix , 24 hr supermarket"
                description="Entire rental unit hosted by Fns"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-54237608/original/e2e965c6-7d51-4bac-b99b-06b6e20a72c3.jpeg?im_w=720"
                title="Most attractive building in Dubai marina"
                description="Entire rental unit hosted by Jesper."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/69226f05-bc7c-4313-882d-588a0f83727c.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/69226f05-bc7c-4313-882d-588a0f83727c.jpg?im_w=720"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-49104046/original/fce2696d-0a1b-4e68-a210-374c1eed36c2.jpeg?im_w=720"
                title="Entire rental unit hosted by Bobby"
                description="3 guests . Studio . 2 bed . 1 bath"
                price="£350/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/465e71c5-727b-4717-be49-1d75c2d54782.jpg?im_w=720"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$143/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/6f41d551-e8e4-47a1-9852-bffbda667287.jpg?im_w=720"
                title="Entire residential home hosted by Havis"
                description="8 guests . 2 bedrooms . 4 beds . 2 baths"
                price="$91/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/38a9898e-dede-45e2-a4c2-9cac2c03bc47.jpg?im_w=720"
                title="Room in hotel hosted by Lina"
                description=" 2 guests . 1 bedroom . 1 bed . 1 private bath"
                price="$261/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/ce7b76e5-8e6a-4284-a368-8bf8682822d2.jpg?im_w=720"
                title="Room in hotel hosted by The Quay"
                description="1 guest . 1 bedroom . 1 bed . 1 private bath"
                price="$99/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-52413483/original/00b79465-686c-4e5f-b1ea-889a05cc5720.jpeg?im_w=720"
                title="Room in hotel hosted by Sweet Home"
                description="2 guests . 1 bedroom . 2 beds . 1 private bath"
                price="$300/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/5b76ee58-e35f-4d00-8a40-aa2909db7447.jpg?im_w=720"
                title="Premier/Deluxe Room of MBS Hotel"
                description="2 guests . 1 bedroom . 2 beds . 1 private bath"
                price="$296/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-47913625/original/72c68194-ddcb-4968-a845-8feb6bb8f807.jpeg?im_w=720"
                title="Entire condominium (condo) hosted by Lexio"
                description=" 6 guests . 2 bedrooms . 2 beds . 2 baths"
                price="$46/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/4b03fe90-6eab-45cb-97c7-407a06131cc8.jpg?im_w=720"
                title="Room in boutique hotel hosted by Lina"
                description=" 2 guests .  1 bedroom . 1 bed . 1 private bath"
                price="£130/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-47790035/original/4a429340-3cb7-4083-866b-801bd072ced8.jpeg?im_w=720"
                title="This is a boutique hotel"
                description="321 rooms"
                price="$141/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-549965085244920641/original/6062ed81-f1bd-4409-a249-0a5dc5df258d.jpeg?im_w=720"
                title="Private room in serviced apartment hosted by Yin"
                description="2 guests . 1 bedroom . 1 bed . 1 private bath"
                price="$99/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-54115572/original/c6ebe3f9-23e8-449b-9078-7acf3490aa12.jpeg?im_w=720"
                title="Entire condominium (condo) hosted by Novi"
                description=" 2 guests . 1 bedroom .1 bed .1 bath"
                price="$25/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/e7f74c4b-cf74-4a55-bf13-772f4c4e50f0.jpg?im_w=720"
                title="Room in hotel hosted by Rest Bugis"
                description=" 2 guests . 1 bedroom . 1 bed . 1 shared bath"
                price="$89/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/8b93db41-00ed-4581-9f31-54585f10a346.jpg?im_w=720"
                title="Entire cabin hosted by Belinda"
                description=" 4 guests . 1 bedroom . 2 beds . 1 bath"
                price="$212/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/da13eb90-6e74-4025-9617-8ad18ced46b6.jpg?im_w=720"
                title="3 Bedroom Flat in Bournemouth"
                description=" 1 guest . 1 bedroom . 1 bed . 1 private bath"
                price="$74/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/8b16f962-ab6f-44f7-ae84-b75191d02548.jpg?im_w=720"
                title="Entire cabin hosted by Belinda"
                description=" 5 guests . 2 bedrooms . 4 beds . 1 bath"
                price="$78/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fb43332c-3289-44e2-8c11-0e594941dc82.jpg?im_w=720"
                title="Entire residential home hosted by Mike And Leyla"
                description=" 4 guests . 2 bedrooms . 2 beds . 1 bath"
                price="$85/night"
            />
            </div>

        </div>
    );
};

export default Home;
