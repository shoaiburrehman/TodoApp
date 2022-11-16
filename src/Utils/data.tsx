import { sampleImages } from "../Assets/images";
import { colors } from "./theme";

export const Categories = [
    {
        id: 0,
        image: sampleImages.category1
    },
    {
        id: 1,
        image: sampleImages.category2
    },
    {
        id: 2,
        image: sampleImages.category3
    },
    {
        id: 3,
        image: sampleImages.category4
    },
    {
        id: 4,
        image: sampleImages.category5
    },
    {
        id: 5,
        image: sampleImages.category1
    },
    {
        id: 6,
        image: sampleImages.category2
    },
    {
        id: 7,
        image: sampleImages.category3
    },
]

export const RecentProducts = [
    {
        id: 0,
        text: 'Hands Finger Manicure',
        note: 'Custom Nails',
        price: '$5.75',
        rating: '4.5',
        count: 10,
        image: sampleImages.nailItem1
    },
    {
        id: 1,
        text: 'We Tested This Non-Toxic',
        note: 'Custom Nails',
        price: '$5.75',
        rating: '4.5',
        count: 10,
        image: sampleImages.nailItem2
    },
]

export const ProductListing = [
    {
        id: 0,
        text: 'Close-up of Woman',
        price: '$5.75',
        rating: '4.5',
        image: sampleImages.nailItem3,
        inStock: true,
        customNail: true,
        packOf10: true,
    },
    {
        id: 1,
        text: 'We Tested This Non-toxic',
        price: '$5.75',
        rating: '4.5',
        image: sampleImages.nailItem2,
        inStock: false,
        customNail: true,
        packOf10: true,
    },
    {
        id: 2,
        text: 'Hands Finger Manicure',
        price: '$5.75',
        rating: '4.5',
        image: sampleImages.nailItem1,
        inStock: true,
        customNail: false,
        packOf10: true,
    },
    {
        id: 3,
        text: ' Vntage Crystal ',
        price: '$5.75',
        rating: '4.5',
        image: sampleImages.nailItem6,
        inStock: true,
        customNail: false,
        packOf10: true,
    },
    {
        id: 4,
        text: 'Close-up of Woman',
        price: '$5.75',
        rating: '4.5',
        image: sampleImages.nailItem4,
        inStock: true,
        customNail: false,
        packOf10: true,
    },
    {
        id: 5,
        text: 'We Tested This Non-toxic',
        price: '$5.75',
        rating: '4.5',
        image: sampleImages.nailItem5,
        inStock: true,
        customNail: true,
        packOf10: false,
    },
]

export const radioUnits = [
    {
      label: '1',
      text: 'Custom / Single',
    },
    {
      label: '2',
      text: 'Pack of 10',
    }
]

export const NailCategories = [
    {
        id: 0,
        name: 'Square',
        image: sampleImages.nail1,
    },
    {
        id: 1,
        name: 'Round',
        image: sampleImages.nail2,
    },
    {
        id: 2,
        name: 'Almond',
        image: sampleImages.nail3,
    },
    {
        id: 3,
        name: 'Stiletto',
        image: sampleImages.nail4,
    },
    {
        id: 4,
        name: 'Oval',
        image: sampleImages.nail5,
    },
    {
        id: 5,
        name: 'Straight',
        image: sampleImages.nail6,
    },
    {
        id: 6,
        name: 'Peak',
        image: sampleImages.nail7,
    },
    {
        id: 7,
        name: 'Flare',
        image: sampleImages.nail8,
    },
    {
        id: 8,
        name: 'Edge',
        image: sampleImages.nail9,
    },
    {
        id: 9,
        name: 'Pipe',
        image: sampleImages.nail10,
    },
    {
        id: 10,
        name: 'Stiletto',
        image: sampleImages.nail11,
    },
    {
        id: 11,
        name: 'Lipstick',
        image: sampleImages.nail12,
    },
]

export const MyWishlist = [
    {
        id: 0,
        text: 'Close-up of Woman',
        description: "Lorem Ipsum is simply dummy text of the print and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: '$5.75',
        totalPrice: '$25',
        rating: '4.5',
        image: sampleImages.nailItem3,
        isLike: true,
        inStock: true,
    },
    {
        id: 1,
        text: 'Close-up of Woman',
        description: "Lorem Ipsum is simply dummy text of the print and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: '$5.75',
        totalPrice: '$25',
        rating: '4.5',
        image: sampleImages.nailItem1,
        isLike: true,
        inStock: false,
    },
    {
        id: 2,
        text: 'Close-up of Woman',
        description: "Lorem Ipsum is simply dummy text of the print and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: '$5.75',
        totalPrice: '$25',
        rating: '4.5',
        image: sampleImages.nailItem5,
        isLike: true,
        inStock: true,
    },
]

export const nailColors = [
    {
        id: 0,
        label: 'nailColor1',
        nailColor: "#FF0100",
    },
    {
        id: 1,
        label: 'nailColor2',
        nailColor: "#FFD99D",
    },
    {
        id: 2,
        label: 'nailColor3',
        nailColor: "#FBFF9F",
    },
    {
        id: 3,
        label: 'nailColor4',
        nailColor: "#BAFF9D",
    },
    {
        id: 4,
        label: 'nailColor5',
        nailColor: "#007FFF",
    },
    {
        id: 5,
        label: 'nailColor6',
        nailColor: "#D19DFF",
    },
    {
        id: 6,
        label: 'nailColor7',
        nailColor: colors.white,
        borderColor: colors.grayLine
    },
    {
        id: 7,
        label: 'nailColor8',
        nailColor: "#AFAFAF",
    },
]
  

export const reviewData = [
    {
        id: 0,
        name: "Alexa Jhonson",
        image: sampleImages.reviewUser1,
        rating: 4,
        datePosted: 'Jan 4, 2022',
        timePosted: '08:00 AM',
        review: 'Lorem ipsum dolor sit amet, adipiscing elit. Aenean euismod bibendum laoree Lorem ipsum dolor sit amet, adipiscing elit.'
    },
    {
        id: 1,
        name: "Olivia",
        image: sampleImages.reviewUser2,
        rating: 4,
        datePosted: 'Jan 4, 2022',
        timePosted: '08:00 AM',
        review: 'Lorem ipsum dolor sit amet, adipiscing elit. Aenean euismod bibendum laoree Lorem ipsum dolor sit amet, adipiscing elit.'
    },
]

export const cartData = [
    {
        id: 0,
        title: 'Right Hand',
        details: [
            {
                id: 0,
                name: 'Little Finger',
                info: '2d - 1 inch'    
            },
            {
                id: 1,
                name: 'Ring Finger',
                info: '3d - 2 inch'    
            },
            {
                id: 2,
                name: 'Middle Finger:',
                info: '5d - 1 inch'    
            },
            {
                id: 3,
                name: 'Index Finger:',
                info: '7d - 1 inch'    
            },
            {
                id: 4,
                name: 'Thumb :',
                info: '8d - 1 inch'    
            },
        ]
    },
    {
        id: 1,
        title: 'Left Hand',
        details: [
            {
                id: 0,
                name: 'Little Finger',
                info: '2d - 1 inch'    
            },
            {
                id: 1,
                name: 'Ring Finger',
                info: '3d - 2 inch'    
            },
            {
                id: 2,
                name: 'Middle Finger:',
                info: '5d - 1 inch'    
            },
            {
                id: 3,
                name: 'Index Finger:',
                info: '7d - 1 inch'    
            },
            {
                id: 4,
                name: 'Thumb :',
                info: '8d - 1 inch'    
            },
        ]
    }
]