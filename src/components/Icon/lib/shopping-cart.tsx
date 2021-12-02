import type { IconLibProps } from "../icon.types";

const IconShoppingCart = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.08 7.00059C20.9072 6.70121 20.6598 6.45172 20.3618 6.27646C20.0639 6.1012 19.7256 6.00615 19.38 6.00059H6.58L6 3.74059C5.9414 3.52242 5.81066 3.33053 5.62908 3.19616C5.44749 3.06179 5.22576 2.99285 5 3.00059H3C2.73478 3.00059 2.48043 3.10594 2.29289 3.29348C2.10536 3.48102 2 3.73537 2 4.00059C2 4.2658 2.10536 4.52016 2.29289 4.70769C2.48043 4.89523 2.73478 5.00059 3 5.00059H4.24L7 15.2606C7.0586 15.4787 7.18934 15.6706 7.37092 15.805C7.55251 15.9394 7.77424 16.0083 8 16.0006H17C17.1847 16 17.3656 15.9483 17.5227 15.8513C17.6798 15.7542 17.8069 15.6155 17.89 15.4506L21.17 8.89059C21.3122 8.5926 21.3783 8.26406 21.3626 7.93427C21.3469 7.60448 21.2498 7.28371 21.08 7.00059Z"
        fill="currentColor"
      />

      <path
        d="M7.5 21.0006C8.32843 21.0006 9 20.329 9 19.5006C9 18.6722 8.32843 18.0006 7.5 18.0006C6.67157 18.0006 6 18.6722 6 19.5006C6 20.329 6.67157 21.0006 7.5 21.0006Z"
        fill="currentColor"
      />

      <path
        d="M17.5 21.0006C18.3284 21.0006 19 20.329 19 19.5006C19 18.6722 18.3284 18.0006 17.5 18.0006C16.6716 18.0006 16 18.6722 16 19.5006C16 20.329 16.6716 21.0006 17.5 21.0006Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconShoppingCart;
