import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionTestimonial() {
  return (
    <section className="py-16 xl:py-24 bg-gray-50">
      <GridContainer className="text-center">
        <div>
          <Image
            src="/microsoft.svg"
            alt="microsoft"
            width={140}
            height={40}
            className="mx-auto"
          />
          <h2 className="my-8 text-3xl/tight lg:text-4xl/snug xl:text-5xl/tight font-medium text-gray-900 -tracking-[0.96px]">
            With Invoice AI, we’ve significantly improved invoice accuracy and
            minimized human error across global teams.
          </h2>
          <div>
            <Image
              src="/avatar-testimonial.jpg"
              alt="avatar"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <span className="block text-lg font-medium text-gray-900">
              Daniel Myers
            </span>
            <small className="block text-base text-gray-600">
              Senior Finance Manager, Microsoft
            </small>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
