import type { IconLibProps } from "@/libs/icons/icons.types";

const Font = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0807 15.7012H4.57288L3.42053 19.0117H0.852173L6.22327 4.79297H8.44006L13.8209 19.0117H11.2428L10.0807 15.7012ZM5.26624 13.709H9.38733L7.32678 7.81055L5.26624 13.709Z"
        fill="currentColor"
      />
      <path
        d="M20.726 19.0117C20.6218 18.8099 20.5307 18.4811 20.4526 18.0254C19.6974 18.8132 18.7729 19.207 17.6791 19.207C16.6179 19.207 15.752 18.9043 15.0815 18.2988C14.4109 17.6934 14.0756 16.9447 14.0756 16.0527C14.0756 14.9264 14.4923 14.0638 15.3256 13.4648C16.1655 12.8594 17.3634 12.5566 18.9194 12.5566H20.3744V11.8633C20.3744 11.3164 20.2214 10.8802 19.9155 10.5547C19.6095 10.2227 19.144 10.0566 18.519 10.0566C17.9786 10.0566 17.5359 10.1934 17.1908 10.4668C16.8458 10.7337 16.6733 11.0755 16.6733 11.4922H14.3002C14.3002 10.9128 14.4923 10.3724 14.8764 9.87109C15.2605 9.36328 15.7813 8.96615 16.4389 8.67969C17.103 8.39323 17.8419 8.25 18.6557 8.25C19.8927 8.25 20.879 8.5625 21.6147 9.1875C22.3504 9.80599 22.728 10.6784 22.7475 11.8047V16.5703C22.7475 17.5208 22.8809 18.2793 23.1479 18.8457V19.0117H20.726ZM18.1186 17.3027C18.5873 17.3027 19.0268 17.1888 19.4369 16.9609C19.8536 16.7331 20.1661 16.4271 20.3744 16.043V14.0508H19.0951C18.2162 14.0508 17.5554 14.2038 17.1127 14.5098C16.67 14.8158 16.4487 15.2487 16.4487 15.8086C16.4487 16.2643 16.5984 16.6289 16.8979 16.9023C17.2039 17.1693 17.6108 17.3027 18.1186 17.3027Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Font;