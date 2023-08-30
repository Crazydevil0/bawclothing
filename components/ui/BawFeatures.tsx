import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Feature {
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  feature_1: Feature;
  feature_2: Feature;
  feature_3: Feature;
}

function FeatureHighlights(
  { feature_1, feature_2, feature_3 }: Props,
) {
  const img_alt = feature_1.title + " " + feature_1.description + ", " +
    feature_2.title + " " + feature_2.description + ", " + feature_3.title +
    " " + feature_3.description;

  const IMAGE_SRC = {
    0: "data:image/svg+xml;charset=utf-8,%3Csvg width='291' height='292' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M145.276.877c-.066.498-2.026 10.163-3.686 18.2-.93 4.484-1.96 9.566-2.325 11.293-.332 1.727-1.628 7.938-2.823 13.783-1.196 5.846-2.425 11.724-2.691 13.086-1.129 5.846-3.487 17.171-3.62 17.603-.1.233-1.926-1.993-4.251-5.214-5.049-7.075-11.259-15.776-13.02-18.3-.73-1.03-2.125-3.023-3.122-4.385-.963-1.328-6.775-9.499-12.886-18.068-6.145-8.602-11.06-15.244-10.96-14.78.1.465 1.029 4.65 2.059 9.3 1.03 4.65 2.291 10.396 2.823 12.787a1331.17 1331.17 0 012.125 9.632c1.263 5.845 3.654 16.606 7.008 31.851 1.196 5.447 2.126 9.964 2.06 10.03-.067.067-1.528-.73-3.255-1.76A8727.68 8727.68 0 0066.694 67.07a885.147 885.147 0 01-6.476-3.82 2593.6 2593.6 0 00-12.289-7.206c-5.746-3.388-10.661-6.31-10.894-6.477-.897-.73-.697.033.399 1.428.598.797 3.985 5.348 7.54 10.097 3.52 4.75 9.465 12.754 13.218 17.769a6450.018 6450.018 0 0113.584 18.267c3.753 5.015 7.473 9.997 8.27 11.06.797 1.096 1.395 2.026 1.328 2.126-.1.066-3.42-.233-7.406-.698-4.019-.465-11.392-1.295-16.407-1.86-5.015-.564-12.256-1.395-16.108-1.827a780.45 780.45 0 00-11.625-1.295c-2.557-.299-8.602-.963-13.451-1.528-4.85-.531-9.167-.996-9.632-.996-.797.033-.797.033-.166.398 1.03.565 20.559 11.592 27.234 15.378 3.289 1.86 8.835 5.015 12.29 6.975 3.487 1.959 8.469 4.816 11.126 6.31 2.657 1.495 6.775 3.82 9.133 5.148 6.344 3.554 6.078 3.388 5.314 3.687-.365.133-2.59.863-4.982 1.594-2.358.731-9.532 2.956-15.942 4.949a1684.062 1684.062 0 01-15.61 4.882c-2.192.698-9.599 2.989-16.44 5.148-6.842 2.159-13.784 4.318-15.444 4.816-1.661.498-3.09.996-3.255 1.129-.133.133 4.65.731 10.628 1.296 36.368 3.62 49.188 4.882 56.23 5.546 2.822.266 5.878.598 6.775.698l1.594.199-.764.731c-.432.365-2.059 1.826-3.62 3.188s-3.587 3.155-4.484 3.986c-3.288 2.956-7.008 6.244-8.668 7.672-1.428 1.262-12.887 11.425-13.95 12.421-.2.167-5.912 5.248-12.72 11.26-6.776 6.011-12.256 10.993-12.19 11.06.067.099 13.252-4.252 29.327-9.632 42.181-14.149 42.115-14.116 42.214-14.016.133.133-3.52 8.27-9.565 21.422-2.159 4.65-4.185 9.134-4.584 9.964-.863 1.96-7.904 17.371-12.986 28.53-2.225 4.816-4.019 8.934-4.019 9.134 0 .166.266.033.598-.332.332-.333 2.16-2.06 4.052-3.787 1.893-1.727 5.48-5.015 7.971-7.307 5.115-4.716 10.96-10.096 12.256-11.259.465-.431 2.358-2.159 4.185-3.852 1.826-1.661 8.104-7.44 13.949-12.787 5.846-5.348 11.193-10.263 11.924-10.927l1.295-1.196-.233 38.328c-.132 21.09-.166 38.294-.066 38.195.133-.133 1.03-2.226 4.351-9.931 2.591-6.012 7.506-17.437 12.953-30.058 3.222-7.506 7.207-16.739 8.835-20.526 1.627-3.786 3.221-7.439 3.553-8.07l.598-1.163 1.196 2.591c1.063 2.258 2.524 5.613 6.742 15.378 1.03 2.358 5.447 12.454 8.137 18.599 2.591 5.945 4.75 10.86 5.647 12.953.498 1.195 1.627 3.72 2.457 5.646.864 1.926 2.624 5.978 3.953 9.034 1.295 3.056 2.424 5.48 2.491 5.414.066-.067-.034-17.171-.266-38.029-.199-20.858-.332-37.963-.266-38.029.1-.1 7.606 6.742 43.576 39.756 6.742 6.178 12.288 11.193 12.388 11.126.067-.099-1.528-3.786-3.587-8.237-16.673-36.467-27.567-60.48-27.467-60.58.066-.066 4.882 1.495 10.728 3.454 45.668 15.345 60.68 20.326 60.813 20.194.066-.067-3.488-3.322-7.905-7.274-4.45-3.919-8.801-7.805-9.731-8.635-.897-.831-5.082-4.517-9.3-8.237-4.185-3.72-8.403-7.44-9.3-8.27-.93-.831-5.812-5.181-10.86-9.665-5.049-4.484-9.134-8.171-9.101-8.237.1-.066 2.691-.332 23.781-2.425 48.258-4.749 51.48-5.081 51.214-5.314-.133-.133-1.793-.697-3.72-1.295-1.926-.565-6.011-1.86-9.133-2.823-18.367-5.812-48.856-15.378-52.975-16.64-6.642-2.092-6.31-1.893-5.314-2.524.465-.266 3.82-2.192 7.473-4.251s9.2-5.181 12.289-6.975c8.536-4.882 43.376-24.744 44.505-25.341.997-.532.997-.532.166-.565-.465 0-4.782.465-9.632.996-4.849.565-10.794 1.229-13.185 1.495-2.425.266-7.672.83-11.625 1.295a5017.75 5017.75 0 01-16.374 1.86c-5.015.565-12.388 1.395-16.374 1.86-3.985.465-7.34.797-7.406.698-.1-.067 2.524-3.72 5.779-8.071 3.255-4.384 8.602-11.525 11.857-15.91 7.473-10.063 11.292-15.21 20.227-27.2 3.952-5.282 7.107-9.666 7.041-9.732-.067-.067-2.325 1.196-5.049 2.823a980.903 980.903 0 01-9.1 5.38c-5.214 3.056-13.617 7.972-21.754 12.787a6144.095 6144.095 0 01-28.331 16.707l-1.428.797.166-.764c.1-.432 1.162-5.281 2.358-10.761 1.196-5.48 2.624-11.924 3.155-14.282.532-2.391 1.495-6.709 2.126-9.632 1.262-5.878 3.819-17.503 6.642-30.223.997-4.55 1.761-8.337 1.728-8.403-.067-.066-2.691 3.52-5.846 7.971-3.155 4.45-6.178 8.669-6.709 9.4-.531.73-4.185 5.812-8.071 11.292a4418.968 4418.968 0 01-11.691 16.374c-2.524 3.52-4.816 6.742-5.081 7.14-.266.399-1.628 2.292-3.023 4.218-1.361 1.927-2.69 3.853-2.922 4.285-.233.432-.532.631-.698.498-.133-.166-.564-1.86-.963-3.786-.365-1.926-1.428-7.14-2.358-11.625-.93-4.483-2.259-11.06-2.989-14.613-.731-3.554-2.06-10.13-2.99-14.614-.929-4.484-2.49-12.19-3.487-17.105-1.827-8.9-2.723-12.853-2.79-12.388zm2.093 25.673c3.487 16.873 5.613 27.235 6.177 30.058.332 1.727 1.694 8.303 2.956 14.58 1.296 6.311 2.358 11.592 2.358 11.725 0 .133.1.266.266.266.133 0 5.248-7.042 11.359-15.61 23.448-32.915 26.869-37.73 27.334-38.362.565-.73.532-.53-1.428 8.304-.531 2.358-1.495 6.709-2.126 9.631-.631 2.923-1.992 9.034-2.989 13.618-.996 4.55-2.723 12.488-3.852 17.603a3412.091 3412.091 0 00-2.79 12.687c-.432 1.893-.698 3.42-.631 3.42.166 0 3.122-1.726 14.381-8.369 3.554-2.092 9.1-5.347 12.289-7.24 13.019-7.64 17.237-10.13 19.595-11.558 1.362-.83 4.617-2.757 7.241-4.285 5.114-2.956 5.081-2.989 2.358.565-.864 1.13-13.618 18.234-21.522 28.895a4831.365 4831.365 0 01-10.097 13.551c-3.421 4.65-6.211 8.469-6.144 8.536.066.033 3.088-.266 6.742-.698 3.653-.398 10.761-1.229 15.776-1.793 23.05-2.591 27.268-3.056 35.505-4.019 4.816-.531 8.801-.963 8.834-.897.1.1-3.52 2.159-40.918 23.515-9.366 5.314-17.038 9.798-17.038 9.931 0 .133 4.882 1.793 10.894 3.653 41.117 12.887 52.709 16.607 52.21 16.773-.265.066-3.786.465-7.805.863a2212.26 2212.26 0 00-17.437 1.694c-9.532.93-22.319 2.192-35.471 3.488-4.617.464-5.679.631-5.314.963.232.232 3.288 2.956 6.742 6.011 6.145 5.447 11.226 9.964 29.892 26.537 4.949 4.385 9.897 8.769 11.06 9.765 1.129.996 1.993 1.86 1.926 1.926-.066.1-14.414-4.649-31.884-10.495-17.47-5.845-31.752-10.595-31.752-10.528 0 .066.996 2.258 2.192 4.882 1.229 2.624 3.952 8.668 6.111 13.418 2.159 4.749 5.713 12.588 7.938 17.437a2728.92 2728.92 0 004.517 9.798c.233.531 1.594 3.52 2.989 6.642a489.218 489.218 0 013.388 7.473l.83 1.827-.797-.698c-1.527-1.361-32.98-30.19-34.01-31.187-.199-.166-1.76-1.594-3.454-3.155a946.032 946.032 0 01-7.274-6.676l-4.184-3.852-.1 5.679c-.033 3.122.066 18.3.199 33.744.166 15.444.266 28.099.233 28.165-.067.066-2.724-5.912-6.975-15.71-1.993-4.55-3.321-7.572-5.248-11.956a739.432 739.432 0 00-2.823-6.477c-.896-2.092-2.723-6.277-4.052-9.3a3695.3 3695.3 0 01-4.218-9.631 347.318 347.318 0 00-2.856-6.577l-1.063-2.391-.531 1.229c-.93 2.092-9.964 23.017-11.093 25.674-6.743 15.743-14.747 34.242-15.046 34.707-.133.299-.199-14.746-.133-33.412l.166-33.944-18.234 16.74c-25.109 23.016-30.456 27.932-30.954 28.43-.764.764-.73.498.266-1.727a176.175 176.175 0 001.992-4.384c.565-1.229 1.23-2.691 1.495-3.222.598-1.295 7.54-16.573 16.474-36.202 3.82-8.37 6.941-15.278 6.941-15.344 0-.067-14.248 4.683-31.619 10.495-17.403 5.845-31.784 10.595-31.95 10.528-.133-.033 1.062-1.229 2.657-2.623 1.627-1.395 3.254-2.79 3.62-3.122 1.262-1.163 6.31-5.647 9.3-8.271a445.962 445.962 0 004.317-3.852c.73-.664 4.185-3.72 7.639-6.776 3.487-3.055 8.104-7.174 10.263-9.1 2.192-1.926 5.546-4.916 7.473-6.643 1.926-1.693 3.786-3.354 4.118-3.686.698-.631 2.79-.366-20.525-2.657-5.48-.532-14.448-1.428-19.928-1.96-5.48-.531-13.451-1.328-17.67-1.727-4.25-.432-7.738-.863-7.738-.963 0-.133 3.255-1.229 7.24-2.458 3.953-1.262 13.784-4.318 21.821-6.842a4801.322 4801.322 0 0117.77-5.546c13.35-4.119 16.938-5.281 16.938-5.414 0-.1-1.927-1.229-4.251-2.524a23165.572 23165.572 0 01-44.008-24.943c-5.646-3.189-10.163-5.879-10.097-5.945.067-.1 4.02.299 8.736.83 4.716.565 12.654 1.461 17.57 2.026 20.392 2.292 27.234 3.056 33.544 3.786 3.654.432 6.71.731 6.776.665.033-.034-2.292-3.289-5.181-7.174a2102.605 2102.605 0 01-9.732-13.053 8915.494 8915.494 0 00-19.43-26.072c-2.39-3.189-4.683-6.31-5.081-6.875-.697-.997-.365-.864 3.986 1.66a546.576 546.576 0 017.24 4.285c1.362.83 6.543 3.852 11.458 6.742 4.95 2.89 10.396 6.111 12.123 7.14 1.727 1.064 4.949 2.957 7.14 4.219 2.193 1.295 6.577 3.853 9.732 5.712 3.189 1.894 5.813 3.355 5.879 3.288.066-.066-.1-.996-.365-2.092-.233-1.096-1.428-6.476-2.624-11.957a2877.58 2877.58 0 00-3.155-14.281c-.532-2.392-1.495-6.71-2.126-9.632-4.417-20.293-5.846-26.736-6.045-27.4-.332-.997-.63-1.396 14.415 19.761 17.835 25.076 24.411 34.21 24.61 34.31.167.032.366-.4.465-.997.1-.598.632-3.255 1.196-5.912 1.794-8.702 5.713-27.667 6.344-30.888.697-3.488 5.214-25.475 5.546-27.069.233-.93.266-.863.665.83.232.997.93 4.351 1.561 7.473z' fill='%23000'/%3E%3C/svg%3E",
    1: "data:image/svg+xml;charset=utf-8,%3Csvg width='228' height='228' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M104.654.172c-20.999 1.87-41.032 9.293-57.385 21.21-9.202 6.728-18.977 16.504-25.705 25.706-9.112 12.49-15.78 27.606-19.099 43.265-2.685 12.702-3.107 26.943-1.207 40.037 4.496 30.684 21.331 58.109 46.946 76.363 26.55 18.977 61.428 25.524 93.198 17.559 28.874-7.271 53.674-25.344 69.363-50.536 10.651-17.137 16.413-36.477 16.987-56.993 1.056-38.136-16.806-73.738-48.364-96.276C164.604 9.977 146.381 3.008 127.222.595 122.938.05 108.908-.19 104.654.172zm2.444 6.728C89.961 25.365 77.681 46.334 70.531 69.324c-3.892 12.581-5.883 24.137-6.698 39.222l-.181 3.56H3.008l.181-3.56c1.418-24.288 9.504-45.558 24.439-64.324 3.862-4.828 11.947-12.913 16.775-16.775C58.855 15.952 74.876 8.469 92.465 5.03c4.284-.845 10.862-1.72 14.693-1.931 4.134-.242 4.134-.694-.06 3.801zm19.671-3.228c20.426 2.263 39.977 10.44 56.722 23.775 4.737 3.771 12.853 11.887 16.624 16.624 15.116 18.917 23.111 39.976 24.559 64.626l.211 3.409h-60.643l-.181-1.9c-.091-1.026-.242-3.5-.332-5.492-.392-7.723-1.931-17.62-4.103-26.339-2.686-10.74-6.276-20.546-11.435-30.985-7.452-15.146-16.323-27.878-28.15-40.4l-3.952-4.163 3.319.211c1.81.09 5.129.393 7.361.634zm-9.413 5.008c8.448 8.63 16.655 19.49 23.141 30.684 3.048 5.28 8.086 15.659 10.198 21 5.944 15.175 9.474 31.558 10.077 46.824l.181 4.918H67.031v-3.409c0-6.457 1.116-16.111 2.896-24.65 5.009-24.438 16.504-47.941 33.309-68.186C106.314 12.15 113.072 5 113.524 5c.121 0 1.841 1.659 3.832 3.68zM63.833 118.955c.362 6.276.815 11.314 1.418 15.629 3.289 23.171 11.616 44.713 25.162 65.018 5.401 8.086 9.957 13.788 17.319 21.693l3.137 3.349-2.232-.151c-17.258-1.297-28.964-4.254-42.39-10.68-11.707-5.642-21.27-12.401-30.624-21.754C15.861 172.327 4.85 147.467 3.22 118.955l-.212-3.53h60.644l.18 3.53zm96.939 2.263c-1.026 33.037-14.934 66.979-38.468 94.013-1.84 2.112-4.375 4.857-5.642 6.094l-2.293 2.263-4.133-4.224c-10.892-11.133-19.943-24.016-27.486-39.071-9.504-19.008-14.965-39.645-15.628-59.377l-.181-5.491h94.012l-.181 5.793zm64.053-5.129c0 .392-.151 2.655-.302 5.069-1.086 15.357-4.887 29.175-11.736 42.691-16.383 32.223-47.157 54.368-82.85 59.558-3.952.573-11.615 1.237-11.887 1.026-.06-.03 1.237-1.479 2.897-3.198 10.952-11.375 21.843-27.456 28.752-42.391 7.06-15.326 11.586-31.196 13.396-47.127.423-3.53 1.056-13.003 1.086-15.477v-.815h60.644v.664z' fill='%23000'/%3E%3C/svg%3E",
  };
  return (
    <div class="p-6 sm:px-2 sm:py-10 hidden lg:block w-full">
      <div class="bg-gray-100 overflow-hidden">
        <div class="container relative overflow-hidden justify-between group">
          <div class="flex flex-col justify-between mx-6 sm:flex-row sm:mx-0 overflow-hidden h-[120px]">
            <div class="flex flex-row gap-8 py-3 px-3 sm:flex-col sm:py-0 sm:px-2 relative h-full justify-center">
              <div class="flex flex-col gap-1">
                <span class="text-lg transform transition duration-300 group-hover:scale-125  px-10">
                  {feature_1.title}
                </span>
                <span class="text-lg transform transition duration-300 group-hover:scale-125 font-extrabold uppercase  px-10">
                  {feature_1.description}
                </span>
              </div>
            </div>
            <div class="flex flex-row py-6 sm:flex-col sm:py-0 sm:px-8 relative w-[290px]">
              <img
                width={291}
                height={291}
                class="mt-[-15px] max-w-none"
                loading={"lazy"}
                src={IMAGE_SRC[0]}
                alt={"primeiro icone"}
              />
            </div>
            <div class="flex flex-row gap-8 py-3 sm:flex-col sm:py-0 sm:px-2 relative  h-full justify-center">
              <div class="flex flex-col gap-1">
                <span class="text-lg transform transition duration-300 group-hover:scale-125">
                  {feature_2.title}
                </span>
                <span class="text-lg transform transition duration-300 group-hover:scale-125 font-extrabold uppercase">
                  {feature_2.description}
                </span>
              </div>
            </div>
            <div class="flex flex-row py-6 sm:flex-col sm:py-0 sm:px-8 relative w-[290px]">
              <img
                width={228}
                height={228}
                class="mt-[-85px] max-w-none"
                loading={"lazy"}
                src={IMAGE_SRC[1]}
                alt={"segundo icone"}
              />
            </div>

            <div class="flex flex-row gap-8 py-3 sm:flex-col sm:py-0 sm:px-2 relative  h-full justify-center">
              <div class="flex flex-col gap-1">
                <span class="text-lg transform transition duration-300 group-hover:scale-125  px-10">
                  {feature_3.title}
                </span>
                <span class="text-lg transform transition duration-300 group-hover:scale-125 font-extrabold uppercase px-10">
                  {feature_3.description}
                </span>
              </div>
            </div>
          </div>
          {
            /* <div class="flex absolute top-0 items-center justify-around ">
            <div class="container flex justify-evenly w-[90vw]">


            </div>
          </div> */
          }
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
