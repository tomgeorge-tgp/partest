import React from 'react'

import PropTypes from 'prop-types'

const Toolbar = (props) => {
  return (
    <>
      <div className={`toolbar-container ${props.rootClassName} `}>
        <div className="toolbar-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M19.2327 10.8281H18.4659C18.192 10.8281 17.9389 10.9742 17.8019 11.2114C17.665 11.4486 17.665 11.741 17.8019 11.9782C17.9389 12.2154 18.192 12.3615 18.4659 12.3615H19.2327C19.5066 12.3615 19.7597 12.2154 19.8967 11.9782C20.0337 11.741 20.0337 11.4486 19.8967 11.2114C19.7597 10.9742 19.5066 10.8281 19.2327 10.8281Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M16.2213 5.09565L15.6792 5.63783C15.4869 5.83177 15.4124 6.1134 15.4835 6.37716C15.5546 6.6408 15.7606 6.84682 16.0242 6.91792C16.288 6.98903 16.5696 6.91446 16.7636 6.72218L17.3058 6.18014C17.4994 5.98632 17.575 5.70407 17.5042 5.43939C17.4332 5.17485 17.2266 4.96819 16.962 4.89722C16.6973 4.82637 16.4151 4.90197 16.2213 5.09566L16.2213 5.09565Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M16.7636 16.4761C16.5696 16.2838 16.288 16.2093 16.0242 16.2804C15.7606 16.3515 15.5546 16.5575 15.4835 16.8211C15.4124 17.0849 15.487 17.3665 15.6792 17.5605L16.2213 18.1026C16.4151 18.2963 16.6973 18.3719 16.962 18.3011C17.2266 18.2301 17.4332 18.0234 17.5042 17.7589C17.575 17.4942 17.4994 17.212 17.3058 17.0182L16.7636 16.4761Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M11.5684 5.51894V3.16514C11.5684 2.89123 11.4223 2.63811 11.1851 2.50116C10.9479 2.3642 10.6555 2.3642 10.4183 2.50116C10.1811 2.63811 10.035 2.89123 10.035 3.16514V5.51894C8.55317 5.70441 7.19004 6.4245 6.2017 7.54415C5.21336 8.66366 4.66797 10.1056 4.66797 11.599C4.66797 13.0923 5.21336 14.5343 6.2017 15.6538C7.18991 16.7734 8.55307 17.4935 10.035 17.679V20.0328C10.035 20.3067 10.1811 20.5598 10.4183 20.6968C10.6555 20.8337 10.9479 20.8337 11.1851 20.6968C11.4223 20.5598 11.5684 20.3067 11.5684 20.0328V17.679C13.0503 17.4935 14.4134 16.7734 15.4017 15.6538C16.3901 14.5343 16.9355 13.0923 16.9355 11.599C16.9355 10.1056 16.3901 8.66359 15.4017 7.54415C14.4135 6.4245 13.0504 5.70443 11.5684 5.51894ZM10.035 13.7689C9.4332 13.5557 8.94699 13.1023 8.69246 12.5169C8.43793 11.9314 8.43793 11.2666 8.69246 10.6811C8.94699 10.0957 9.4332 9.64237 10.035 9.42914V13.7689ZM10.035 7.89597C9.8791 7.89571 9.72404 7.91907 9.57502 7.9649C8.55599 8.31018 7.72873 9.06709 7.29466 10.0513C6.86043 11.0357 6.85928 12.157 7.29133 13.1421C7.72336 14.1274 8.54907 14.8861 9.56735 15.2334C9.71958 15.2775 9.87669 15.3033 10.0351 15.3101V16.1304C8.59452 15.8884 7.35488 14.976 6.69592 13.6724C6.0368 12.3688 6.0368 10.8295 6.69592 9.52587C7.35504 8.22228 8.59468 7.30982 10.0351 7.06784L10.035 7.89597Z"\r\n        fill="#125873" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node01">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line opacity="0.1" x1="0.5" y1="0.5" x2="0.499999" y2="15.5" stroke="#125873" stroke-linecap="round" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node02">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line opacity="0.1" x1="0.5" y1="0.5" x2="0.499999" y2="15.5" stroke="#125873" stroke-linecap="round" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node03">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line opacity="0.1" x1="0.5" y1="0.5" x2="0.499999" y2="15.5" stroke="#125873" stroke-linecap="round" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node04">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line opacity="0.1" x1="0.5" y1="0.5" x2="0.499999" y2="15.5" stroke="#125873" stroke-linecap="round" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node05">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <line opacity="0.1" x1="0.5" y1="0.5" x2="0.499999" y2="15.5" stroke="#125873" stroke-linecap="round" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node06">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M18.0168 11.3572C18.0168 11.0155 18.2938 10.7383 18.6357 10.7383C18.9774 10.7383 19.2544 11.0155 19.2544 11.3572V19.3798C19.2544 19.7217 18.9774 19.9988 18.6357 19.9988C18.2938 19.9988 18.0168 19.7217 18.0168 19.3798V11.3572ZM18.0168 3.908C18.0168 3.5661 18.2938 3.28906 18.6357 3.28906C18.9774 3.28906 19.2544 3.5661 19.2544 3.908V7.62119C19.2544 7.96288 18.9774 8.23992 18.6357 8.23992C18.2938 8.23992 18.0168 7.96288 18.0168 7.62119V3.908ZM17.3978 8.23992V10.7154H19.8733V8.23992H17.3978ZM19.8746 7.00226C20.5575 7.00226 21.111 7.55573 21.111 8.23886V10.7167C21.111 11.3996 20.5575 11.9531 19.8746 11.9531H17.3968C16.7138 11.9531 16.1602 11.3996 16.1602 10.7167V8.23886C16.1602 7.55589 16.7136 7.00226 17.3968 7.00226H19.8746Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M11.8253 11.9306C11.8253 12.2723 12.1025 12.5496 12.4442 12.5496C12.7859 12.5496 13.0632 12.2723 13.0632 11.9306V3.908C13.0632 3.5661 12.7859 3.28906 12.4442 3.28906C12.1025 3.28906 11.8253 3.5661 11.8253 3.908V11.9306ZM11.8253 19.3798C11.8253 19.7217 12.1025 19.9988 12.4442 19.9988C12.7859 19.9988 13.0632 19.7217 13.0632 19.3798V15.6666C13.0632 15.3249 12.7859 15.0479 12.4442 15.0479C12.1025 15.0479 11.8253 15.3249 11.8253 15.6666V19.3798ZM11.2066 15.0479V12.5724H13.6819V15.0479H11.2066ZM13.6832 16.2856C14.3661 16.2856 14.9198 15.7321 14.9198 15.049V12.5711C14.9198 11.8882 14.3661 11.3347 13.6832 11.3347H11.2054C10.5224 11.3347 9.96875 11.8882 9.96875 12.5711V15.049C9.96875 15.7319 10.5224 16.2856 11.2054 16.2856H13.6832Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M5.63785 11.3572C5.63785 11.0155 5.91489 10.7383 6.25657 10.7383C6.59847 10.7383 6.87551 11.0155 6.87551 11.3572V19.3798C6.87551 19.7217 6.59847 19.9988 6.25657 19.9988C5.91488 19.9988 5.63785 19.7217 5.63785 19.3798V11.3572ZM5.63785 3.908C5.63785 3.5661 5.91489 3.28906 6.25657 3.28906C6.59847 3.28906 6.87551 3.5661 6.87551 3.908V7.62119C6.87551 7.96288 6.59847 8.23992 6.25657 8.23992C5.91488 8.23992 5.63785 7.96288 5.63785 7.62119V3.908ZM5.01891 8.23992V10.7154H7.49444V8.23992H5.01891ZM7.4955 7.00226C8.17847 7.00226 8.7321 7.55573 8.7321 8.23886V10.7167C8.7321 11.3996 8.17863 11.9531 7.4955 11.9531H5.01769C4.33473 11.9531 3.78125 11.3996 3.78125 10.7167V8.23886C3.78125 7.55589 4.33473 7.00226 5.01769 7.00226H7.4955Z"\r\n        fill="#125873" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node07">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M12.5577 6.04637V4.55813C12.5577 4.24929 12.3084 4 11.9995 4C11.6907 4 11.4414 4.24929 11.4414 4.55813V6.0465C11.4414 6.35534 11.6907 6.60463 11.9995 6.60463C12.3084 6.6045 12.5577 6.35521 12.5577 6.04637Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M11.9995 17.3945C11.6907 17.3945 11.4414 17.6438 11.4414 17.9527V19.441C11.4414 19.7499 11.6907 19.9992 11.9995 19.9992C12.3084 19.9992 12.5577 19.7499 12.5577 19.441V17.9527C12.5577 17.6438 12.3084 17.3945 11.9995 17.3945Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M7.79044 8.34983C7.93184 8.34983 8.07698 8.29402 8.18486 8.18613C8.40438 7.96662 8.40438 7.61318 8.18486 7.3973L7.13176 6.34432C6.91225 6.12481 6.55881 6.12481 6.34292 6.34432C6.12715 6.56383 6.12341 6.91728 6.34292 7.13316L7.3959 8.18613C7.50391 8.29402 7.64531 8.34983 7.79044 8.34983Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M16.6044 15.8131C16.3849 15.5936 16.0315 15.5936 15.8156 15.8131C15.5998 16.0326 15.5961 16.386 15.8156 16.6019L16.8686 17.6549C16.9764 17.7628 17.1216 17.8186 17.263 17.8186C17.4044 17.8186 17.5495 17.7628 17.6574 17.6549C17.8769 17.4354 17.8769 17.0819 17.6574 16.866L16.6044 15.8131Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M6.6045 11.9995C6.6045 11.6907 6.35521 11.4414 6.04637 11.4414H4.55813C4.24929 11.4414 4 11.6907 4 11.9995C4 12.3084 4.24929 12.5577 4.55813 12.5577H6.0465C6.35521 12.5577 6.6045 12.3084 6.6045 11.9995Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M19.441 11.4414H17.9527C17.6438 11.4414 17.3945 11.6907 17.3945 11.9995C17.3945 12.3084 17.6438 12.5577 17.9527 12.5577H19.441C19.7499 12.5577 19.9992 12.3084 19.9992 11.9995C19.9992 11.6907 19.7499 11.4414 19.441 11.4414Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M7.3973 15.8142L6.34432 16.8673C6.12481 17.0868 6.12481 17.4402 6.34432 17.6561C6.45221 17.764 6.59735 17.8198 6.73874 17.8198C6.88013 17.8198 7.02528 17.764 7.13316 17.6561L8.18613 16.6031C8.40565 16.3836 8.40565 16.0302 8.18613 15.8143C7.96662 15.5984 7.61305 15.5984 7.3973 15.8142V15.8142Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M16.6019 8.18864L17.6549 7.13567C17.8744 6.91616 17.8744 6.56271 17.6549 6.34683C17.4354 6.13105 17.0819 6.12732 16.866 6.34683L15.8131 7.3998C15.5936 7.61932 15.5936 7.97276 15.8131 8.18864C15.921 8.29653 16.0661 8.35234 16.2075 8.35234C16.3489 8.35234 16.494 8.29653 16.6019 8.18864Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M11.9986 7.34766C9.43495 7.34766 7.34766 9.43501 7.34766 11.9986C7.34766 14.5622 9.43501 16.6495 11.9986 16.6495C14.5622 16.6495 16.6495 14.5622 16.6495 11.9986C16.6495 9.43501 14.5622 7.34766 11.9986 7.34766ZM11.9986 15.5333C10.0489 15.5333 8.46391 13.9482 8.46391 11.9986C8.46391 10.0489 10.0489 8.46391 11.9986 8.46391C13.9482 8.46391 15.5333 10.0489 15.5333 11.9986C15.5333 13.9482 13.9482 15.5333 11.9986 15.5333Z"\r\n        fill="#125873" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node08">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M15.6811 5.5795H20.2148C20.3451 5.57978 20.4627 5.50139 20.5125 5.38106C20.5625 5.26074 20.5347 5.12217 20.4426 5.03013L19.4499 4.03953C19.3237 3.91762 19.1231 3.91935 18.9991 4.04341C18.875 4.16746 18.8733 4.36806 18.9952 4.49428L19.4377 4.93682H15.681C15.5034 4.93682 15.3594 5.08084 15.3594 5.25846C15.3594 5.43622 15.5034 5.58009 15.681 5.58009L15.6811 5.5795Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M20.2147 6.36328H15.6816C15.5514 6.36299 15.4338 6.44139 15.3839 6.56172C15.334 6.68204 15.3617 6.82061 15.4539 6.91265L16.4458 7.90454C16.572 8.02644 16.7726 8.02458 16.8966 7.90052C17.0207 7.77646 17.0224 7.57587 16.9007 7.44964L16.4581 7.0071H20.2156H20.2154C20.393 7.0071 20.5371 6.86308 20.5371 6.68547C20.5371 6.50785 20.393 6.36383 20.2154 6.36383L20.2147 6.36328Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M18.4437 14.0709H16.9281C16.8619 13.024 16.4504 12.0285 15.758 11.2405L16.8298 10.1688H16.8296C16.9515 10.0426 16.9498 9.84196 16.8258 9.71789C16.7017 9.59381 16.5011 9.5921 16.3749 9.71401L15.2992 10.7902C14.5132 10.1007 13.5219 9.68946 12.4786 9.62009V8.10267C12.4786 7.92491 12.3346 7.78103 12.157 7.78103C11.9792 7.78103 11.8354 7.92491 11.8354 8.10267V9.62469V9.62454C11.2874 9.65872 10.75 9.78938 10.2477 10.0105C9.29803 9.37558 8.62303 8.40549 8.35767 7.29424C8.09232 6.18315 8.25616 5.01279 8.81642 4.01715C8.87242 3.91679 8.8707 3.79431 8.81197 3.69552C8.75597 3.59228 8.64469 3.53125 8.52752 3.53987C6.83491 3.58395 5.26951 4.44905 4.33191 5.85881C3.39399 7.26868 3.20086 9.04676 3.81443 10.6249C4.42785 12.2032 5.77108 13.3841 7.41488 13.7904C7.40325 13.8812 7.39435 13.9744 7.38789 14.0677H5.87101C5.6934 14.0677 5.54938 14.2116 5.54938 14.3893C5.54938 14.567 5.6934 14.711 5.87101 14.711H7.38715C7.45406 15.7557 7.8653 16.7488 8.55666 17.5349L7.48434 18.6078C7.42231 18.6678 7.38684 18.7501 7.38612 18.8364C7.38541 18.9227 7.41929 19.0057 7.48032 19.0667C7.54134 19.1276 7.62434 19.1616 7.71049 19.1609C7.79679 19.1601 7.8792 19.1247 7.93908 19.0627L9.01081 17.991C9.79682 18.6824 10.7906 19.0927 11.8355 19.1572V20.6766C11.8355 20.8543 11.9794 20.9983 12.1571 20.9983C12.3347 20.9983 12.4787 20.8543 12.4787 20.6766V19.1566C13.5225 19.0893 14.5147 18.678 15.3001 17.9871L16.3757 19.062H16.3756C16.4356 19.124 16.5179 19.1595 16.6042 19.1602C16.6905 19.1609 16.7735 19.127 16.8344 19.066C16.8954 19.005 16.9294 18.9221 16.9285 18.8358C16.9278 18.7496 16.8925 18.6671 16.8305 18.6073L15.7561 17.5337C16.4505 16.751 16.863 15.7585 16.9283 14.7142H18.4438C18.6214 14.7142 18.7654 14.5702 18.7654 14.3925C18.7654 14.2149 18.6214 14.0709 18.4438 14.0709L18.4437 14.0709ZM8.01495 14.3925C8.01452 14.233 8.02357 14.0736 8.04195 13.9153C8.06061 13.9153 8.08115 13.9153 8.10053 13.9184C8.28777 13.9401 8.47617 13.9512 8.6647 13.9519C9.59083 13.9507 10.5002 13.7032 11.2991 13.2343C12.098 12.7657 12.7578 12.0928 13.2107 11.2849C13.2664 11.1852 13.2651 11.0635 13.2072 10.9651C13.1494 10.8666 13.0437 10.8061 12.9295 10.8063C12.8974 10.8063 12.8652 10.8063 12.8009 10.8133C12.6072 10.812 12.4139 10.7985 12.2219 10.7728C12.1672 10.7658 12.1133 10.7562 12.0593 10.7471C11.9144 10.7236 11.7712 10.6929 11.6302 10.6551C11.5814 10.6422 11.5319 10.6307 11.4829 10.6159H11.4828C11.3074 10.5623 11.1356 10.4979 10.9681 10.4229C11.6845 10.2093 12.4452 10.1932 13.1699 10.3762C13.8946 10.5595 14.5562 10.9349 15.0851 11.463C15.0966 11.4745 15.1091 11.4849 15.1224 11.4939C15.8796 12.265 16.303 13.3028 16.3015 14.3835V14.3982C16.2975 15.495 15.8589 16.5453 15.0821 17.3194C14.3051 18.0935 13.253 18.528 12.1563 18.528C11.0596 18.528 10.0077 18.0935 9.23069 17.3194C8.45042 16.5456 8.01248 15.4914 8.01495 14.3925L8.01495 14.3925Z"\r\n        fill="#125873" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node09">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M15.5105 14.2802C15.2346 14.2802 14.9797 14.4274 14.8417 14.6664C14.7038 14.9053 14.7038 15.1997 14.8417 15.4385C14.9797 15.6774 15.2346 15.8246 15.5105 15.8246C16.7568 15.8246 17.9085 15.1598 18.5315 14.0805C19.1547 13.001 19.1547 11.6714 18.5315 10.5918C17.9085 9.51247 16.7568 8.84766 15.5105 8.84766C15.2346 8.84766 14.9797 8.99484 14.8417 9.23372C14.7038 9.47261 14.7038 9.76698 14.8417 10.0058C14.9797 10.2449 15.2346 10.392 15.5105 10.392C16.205 10.392 16.8468 10.7625 17.1941 11.364C17.5414 11.9654 17.5414 12.7066 17.1941 13.308C16.8468 13.9095 16.205 14.2799 15.5105 14.2799V14.2802Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M8.28193 16.0227L13.274 19.5324C13.4291 19.6413 13.619 19.6895 13.8072 19.6676C13.9956 19.6456 14.1693 19.5553 14.2952 19.4135C14.4211 19.2718 14.4906 19.0887 14.4902 18.8991V5.77177C14.4901 5.5823 14.4205 5.39957 14.2944 5.2583C14.1684 5.1169 13.9948 5.02682 13.8067 5.00513C13.6186 4.98332 13.429 5.03153 13.274 5.14047L8.28195 8.64809H5.77228C5.56746 8.64809 5.37098 8.72943 5.22623 8.87432C5.08134 9.01908 5 9.21555 5 9.42038V15.2504C5 15.4553 5.08134 15.6517 5.22623 15.7965C5.37099 15.9414 5.56746 16.0227 5.77228 16.0227L8.28193 16.0227ZM6.54456 10.1926H8.5522C8.76523 10.192 8.96843 10.1032 9.11387 9.94741L12.9459 7.25638V17.4145L9.11766 14.7235C8.97223 14.5677 8.7689 14.479 8.55586 14.4783H6.55008L6.54456 10.1926Z"\r\n        fill="#125873" />\r\n</svg>',
            }}
          />
        </div>
        <div className="toolbar-html-node10">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <path\r\n        d="M6.04235 17.4708H8.19892C8.36163 18.4225 8.95417 19.2392 9.79659 19.6731C10.6391 20.107 11.6323 20.107 12.4748 19.6731C13.3172 19.2392 13.9097 18.4225 14.0725 17.4708H16.229C16.7617 17.4935 17.2656 17.2233 17.5511 16.7622C17.8366 16.301 17.8603 15.7186 17.6132 15.2347C17.3662 14.7508 16.8859 14.4386 16.3533 14.4158V13.6241C17.5931 13.141 18.5395 12.0893 18.9088 10.7839C19.2782 9.4786 19.0276 8.07126 18.2322 6.98353C17.4368 5.89589 16.189 5.25432 14.8626 5.25092C14.2621 5.25194 13.6689 5.38559 13.1234 5.64302C13.103 4.91531 12.7052 4.25422 12.0801 3.90849C11.4549 3.56276 10.6972 3.58516 10.0925 3.96702C9.48764 4.349 9.1277 5.03249 9.14812 5.76009V5.91284C8.19189 6.31437 7.37409 6.99842 6.79889 7.8781C6.22355 8.75763 5.91697 9.79287 5.91819 10.8516V14.4157C5.52276 14.4326 5.15019 14.6097 4.88234 14.908C4.61436 15.2065 4.47306 15.6016 4.48958 16.0068C4.50611 16.412 4.67892 16.7937 4.97008 17.0682C5.26136 17.3427 5.64702 17.4875 6.04245 17.4706L6.04235 17.4708ZM11.1358 18.9982C10.6955 18.9979 10.2676 18.8478 9.91951 18.5712C9.57144 18.2947 9.32288 17.9076 9.21273 17.4708H13.0614C12.9511 17.9081 12.7022 18.2955 12.3536 18.5721C12.0051 18.8486 11.5766 18.9985 11.1358 18.9982ZM18.0926 9.57883C18.0926 10.4566 17.7523 11.2984 17.1466 11.919C16.5409 12.5397 15.7193 12.8884 14.8627 12.8884C14.0061 12.8884 13.1845 12.5397 12.5788 11.919C11.973 11.2984 11.6327 10.4566 11.6327 9.57883C11.6327 8.70111 11.973 7.85928 12.5788 7.23863C13.1845 6.61799 14.0061 6.26932 14.8627 6.26932C15.7193 6.26932 16.5409 6.61799 17.1466 7.23863C17.7523 7.85928 18.0926 8.70111 18.0926 9.57883ZM11.1358 4.74185C11.3725 4.74264 11.6013 4.83004 11.7807 4.98824C11.9602 5.14645 12.0786 5.36511 12.1148 5.6049C11.4678 5.48011 10.8039 5.48011 10.1569 5.6049C10.193 5.3651 10.3115 5.14643 10.491 4.98824C10.6705 4.83004 10.8992 4.74264 11.1359 4.74185H11.1358ZM5.68713 15.5843C5.78107 15.4873 5.90907 15.4332 6.0424 15.434H6.41509C6.54686 15.434 6.67331 15.3804 6.76648 15.2849C6.85965 15.1894 6.912 15.0599 6.912 14.9249V10.8516C6.91211 9.94263 7.19163 9.05681 7.71072 8.31979C8.22982 7.58276 8.9622 7.03177 9.80408 6.74527C10.4525 6.52229 11.1445 6.46637 11.819 6.5823C11.0507 7.40274 10.6284 8.50004 10.6433 9.63694C10.6583 10.7738 11.1093 11.859 11.8988 12.6581C12.6883 13.4571 13.753 13.9056 14.8626 13.9067C15.0288 13.906 15.1947 13.8949 15.3596 13.8736V14.925C15.3596 15.06 15.4119 15.1896 15.5051 15.2851C15.5983 15.3805 15.7247 15.4342 15.8565 15.4342H16.2292C16.3609 15.4342 16.4874 15.4878 16.5805 15.5833C16.6737 15.6788 16.7261 15.8083 16.7261 15.9433C16.7261 16.0784 16.6737 16.2079 16.5805 16.3034C16.4874 16.3988 16.3609 16.4525 16.2292 16.4525H6.04246C5.91069 16.4525 5.78424 16.3988 5.69107 16.3034C5.5979 16.2079 5.54555 16.0784 5.54555 15.9433C5.54477 15.8092 5.59568 15.6802 5.68719 15.5844L5.68713 15.5843Z"\r\n        fill="#125873" />\r\n    <path\r\n        d="M14.6852 10.0538L16.6107 10.8175L16.9685 9.86536L15.361 9.22892V6.77734H14.3672V9.5777C14.367 9.68067 14.3972 9.78137 14.454 9.86638C14.5108 9.95139 14.5915 10.0167 14.6852 10.0538L14.6852 10.0538Z"\r\n        fill="#125873" />\r\n</svg>',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .toolbar-container {
            width: 245px;
            height: 36px;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: 10px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #f2fbff;
          }
          .toolbar-html-node {
            top: 6px;
            left: 11px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .toolbar-html-node01 {
            top: 10px;
            left: 43px;
            width: 1px;
            height: 16px;
            position: absolute;
          }
          .toolbar-html-node02 {
            top: 10px;
            left: 83px;
            width: 1px;
            height: 16px;
            position: absolute;
          }
          .toolbar-html-node03 {
            top: 10px;
            left: 123px;
            width: 1px;
            height: 16px;
            position: absolute;
          }
          .toolbar-html-node04 {
            top: 10px;
            left: 163px;
            width: 1px;
            height: 16px;
            position: absolute;
          }
          .toolbar-html-node05 {
            top: 10px;
            left: 203px;
            width: 1px;
            height: 16px;
            position: absolute;
          }
          .toolbar-html-node06 {
            top: 6px;
            left: 171px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .toolbar-html-node07 {
            top: 6px;
            left: 131px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .toolbar-html-node08 {
            top: 6px;
            left: 51px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .toolbar-html-node09 {
            top: 6px;
            left: 91px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .toolbar-html-node10 {
            top: 6px;
            left: 211px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .toolbar-root-class-name {
            top: 65px;
            left: 763px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

Toolbar.defaultProps = {
  rootClassName: '',
}

Toolbar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Toolbar