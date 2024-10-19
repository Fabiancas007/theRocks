import { Carousel } from "react-bootstrap";

interface ImageCarouselProps {
    images: string[];
}

export const ImageCarousel = (props: ImageCarouselProps) => {
  return (
    <Carousel className="rounded overflow-hidden">
    {props.images.map((image, index) => (
        <Carousel.Item key={index}>
            <img
                className="d-block w-100 rounded"
                src={image}
                alt={`Slide ${index}`}
            />
        </Carousel.Item>
    ))}
</Carousel>
  )
}
