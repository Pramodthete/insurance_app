<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { ref } from 'vue'
import { useVueform, Vueform } from '@vueform/vueform'

export default {
  mixins: [Vueform],
  setup(props, context) {
    const form = useVueform(props, context)

    const vueform = ref({
      size: 'md',
      displayErrors: false,
      addClass: 'vf-login-account',
      schema: {
        page_title: {
          type: 'static',
          content: 'Login',
          tag: 'h1'
        },
        divider: {
          type: 'static',
          tag: 'hr'
        },

        user_name: {
          type: 'text',
          label: 'UserName',
          size: 'lg',
          rules: ['required']
        },
        password: {
          type: 'text',
          inputType: 'password',
          rules: [
            'required',
            'min:8',
            'regex:^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ],
          fieldName: 'Password',
          label: 'Password',
          size: 'lg'
        },

        divider_1: {
          type: 'static',
          tag: 'hr'
        },
        login: {
          type: 'button',
          submits: true,
          buttonLabel: 'Log In',
          full: true,
          size: 'lg'
        }
      }
    })

    return {
      ...form,
      vueform
    }
  }
}
</script>

<style>
form {
  padding: 2%;
  border: 1px solid gray;
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  box-shadow: 0px 1px 8px 1px gray;
  position: relative;
  margin-top: 2%;
}
@media screen and (max-width: 500px) {
  form {
    border: none;
    width: 100%;
    box-shadow: none;
  }
}

.vf-login-account *,
.vf-login-account *:before,
.vf-login-account *:after,
.vf-login-account:root {
  --vf-primary: #007bff;
  --vf-primary-darker: #0056b3;
  --vf-color-on-primary: #ffffff;
  --vf-danger: #dc3545;
  --vf-danger-lighter: #f9dcdf;
  --vf-success: #28a745;
  --vf-success-lighter: #c4f1ce;
  --vf-gray-50: #f9fafb;
  --vf-gray-100: #f8f9fa;
  --vf-gray-200: #e9ecef;
  --vf-gray-300: #dee2e6;
  --vf-gray-400: #ced4da;
  --vf-gray-500: #adb5bd;
  --vf-gray-600: #6c757d;
  --vf-gray-700: #495057;
  --vf-gray-800: #343a40;
  --vf-gray-900: #212529;
  --vf-dark-50: #f9fafb;
  --vf-dark-100: #f8f9fa;
  --vf-dark-200: #e9ecef;
  --vf-dark-300: #dee2e6;
  --vf-dark-400: #ced4da;
  --vf-dark-500: #adb5bd;
  --vf-dark-600: #6c757d;
  --vf-dark-700: #495057;
  --vf-dark-800: #343a40;
  --vf-dark-900: #212529;
  --vf-ring-width: 0.2rem;
  --vf-ring-color: #007bff66;
  --vf-link-color: #007bff;
  --vf-link-decoration: underline;
  --vf-font-size: 1rem;
  --vf-font-size-sm: 0.875rem;
  --vf-font-size-lg: 1.25rem;
  --vf-font-size-small: 0.8rem;
  --vf-font-size-small-sm: 0.7rem;
  --vf-font-size-small-lg: 1rem;
  --vf-font-size-h1: 2.5rem;
  --vf-font-size-h1-sm: 2.5rem;
  --vf-font-size-h1-lg: 2.5rem;
  --vf-font-size-h2: 2rem;
  --vf-font-size-h2-sm: 2rem;
  --vf-font-size-h2-lg: 2rem;
  --vf-font-size-h3: 1.75rem;
  --vf-font-size-h3-sm: 1.75rem;
  --vf-font-size-h3-lg: 1.75rem;
  --vf-font-size-h4: 1.5rem;
  --vf-font-size-h4-sm: 1.5rem;
  --vf-font-size-h4-lg: 1.5rem;
  --vf-font-size-h1-mobile: 1.9rem;
  --vf-font-size-h1-mobile-sm: 2.5rem;
  --vf-font-size-h1-mobile-lg: 2.5rem;
  --vf-font-size-h2-mobile: 2rem;
  --vf-font-size-h2-mobile-sm: 2rem;
  --vf-font-size-h2-mobile-lg: 2rem;
  --vf-font-size-h3-mobile: 1.75rem;
  --vf-font-size-h3-mobile-sm: 1.75rem;
  --vf-font-size-h3-mobile-lg: 1.75rem;
  --vf-font-size-h4-mobile: 1.5rem;
  --vf-font-size-h4-mobile-sm: 1.5rem;
  --vf-font-size-h4-mobile-lg: 1.5rem;
  --vf-font-size-blockquote: 1.25rem;
  --vf-font-size-blockquote-sm: 1.25rem;
  --vf-font-size-blockquote-lg: 1.25rem;
  --vf-line-height: 1.5rem;
  --vf-line-height-sm: 1.5rem;
  --vf-line-height-lg: 1.5rem;
  --vf-line-height-small: 1.5rem;
  --vf-line-height-small-sm: 1.5rem;
  --vf-line-height-small-lg: 1.5rem;
  --vf-line-height-headings: 1.2rem;
  --vf-line-height-headings-sm: 1.2rem;
  --vf-line-height-headings-lg: 1.2rem;
  --vf-line-height-blockquote: 1.5;
  --vf-line-height-blockquote-sm: 1.25;
  --vf-line-height-blockquote-lg: 2;
  --vf-letter-spacing: 0px;
  --vf-letter-spacing-sm: 0px;
  --vf-letter-spacing-lg: 0px;
  --vf-letter-spacing-small: 0px;
  --vf-letter-spacing-small-sm: 0px;
  --vf-letter-spacing-small-lg: 0px;
  --vf-letter-spacing-headings: 0px;
  --vf-letter-spacing-headings-sm: 0px;
  --vf-letter-spacing-headings-lg: 0px;
  --vf-letter-spacing-blockquote: 0px;
  --vf-letter-spacing-blockquote-sm: 0px;
  --vf-letter-spacing-blockquote-lg: 0px;
  --vf-gutter: 15px;
  --vf-gutter-sm: 7.5px;
  --vf-gutter-lg: 15px;
  --vf-min-height-input: 2.375rem;
  --vf-min-height-input-sm: 2.125rem;
  --vf-min-height-input-lg: 2.625rem;
  --vf-py-input: 0.375rem;
  --vf-py-input-sm: 0.25rem;
  --vf-py-input-lg: 0.5rem;
  --vf-px-input: 0.75rem;
  --vf-px-input-sm: 0.5rem;
  --vf-px-input-lg: 1rem;
  --vf-py-btn: 0.375rem;
  --vf-py-btn-sm: 0.25rem;
  --vf-py-btn-lg: 0.5rem;
  --vf-px-btn: 0.75rem;
  --vf-px-btn-sm: 0.5rem;
  --vf-px-btn-lg: 1rem;
  --vf-py-btn-small: 0.28125rem;
  --vf-py-btn-small-sm: 0.1875rem;
  --vf-py-btn-small-lg: 0.375rem;
  --vf-px-btn-small: 0.5625rem;
  --vf-px-btn-small-sm: 0.375rem;
  --vf-px-btn-small-lg: 0.75rem;
  --vf-py-group-tabs: 0.375rem;
  --vf-py-group-tabs-sm: 0.25rem;
  --vf-py-group-tabs-lg: 0.5rem;
  --vf-px-group-tabs: 0.75rem;
  --vf-px-group-tabs-sm: 0.5rem;
  --vf-px-group-tabs-lg: 1rem;
  --vf-py-group-blocks: 0.75rem;
  --vf-py-group-blocks-sm: 0.625rem;
  --vf-py-group-blocks-lg: 0.875rem;
  --vf-px-group-blocks: 1rem;
  --vf-px-group-blocks-sm: 1rem;
  --vf-px-group-blocks-lg: 1rem;
  --vf-py-tag: 0px;
  --vf-py-tag-sm: 0px;
  --vf-py-tag-lg: 0px;
  --vf-px-tag: 0.4375rem;
  --vf-px-tag-sm: 0.4375rem;
  --vf-px-tag-lg: 0.4375rem;
  --vf-py-slider-tooltip: 0.125rem;
  --vf-py-slider-tooltip-sm: 0.0625rem;
  --vf-py-slider-tooltip-lg: 0.1875rem;
  --vf-px-slider-tooltip: 0.375rem;
  --vf-px-slider-tooltip-sm: 0.3125rem;
  --vf-px-slider-tooltip-lg: 0.5rem;
  --vf-py-blockquote: 0.5rem;
  --vf-py-blockquote-sm: 0.5rem;
  --vf-py-blockquote-lg: 0.5rem;
  --vf-px-blockquote: 1rem;
  --vf-px-blockquote-sm: 1rem;
  --vf-px-blockquote-lg: 1rem;
  --vf-py-hr: 0.25rem;
  --vf-space-addon: 0.75rem;
  --vf-space-addon-sm: 0.75rem;
  --vf-space-addon-lg: 0.75rem;
  --vf-space-checkbox: 0.25rem;
  --vf-space-checkbox-sm: 0.25rem;
  --vf-space-checkbox-lg: 0.25rem;
  --vf-space-tags: 0.1875rem;
  --vf-space-tags-sm: 0.1875rem;
  --vf-space-tags-lg: 0.1875rem;
  --vf-space-static-tag-1: 1rem;
  --vf-space-static-tag-2: 2rem;
  --vf-space-static-tag-3: 3rem;
  --vf-floating-top: 0rem;
  --vf-floating-top-sm: 0rem;
  --vf-floating-top-lg: 0.6875rem;
  --vf-bg-input: #ffffff;
  --vf-bg-input-focus: #ffffff;
  --vf-bg-input-hover: #ffffff;
  --vf-bg-input-danger: #ffffff;
  --vf-bg-input-success: #ffffff;
  --vf-bg-checkbox: #ffffff;
  --vf-bg-checkbox-hover: #ffffff;
  --vf-bg-checkbox-focus: #ffffff;
  --vf-bg-checkbox-danger: #ffffff;
  --vf-bg-checkbox-success: #ffffff;
  --vf-bg-disabled: #e9ecef;
  --vf-bg-selected: #1118270d;
  --vf-bg-passive: var(--vf-gray-300);
  --vf-bg-icon: var(--vf-gray-500);
  --vf-bg-danger: var(--vf-danger-lighter);
  --vf-bg-success: var(--vf-success-lighter);
  --vf-bg-tag: var(--vf-primary);
  --vf-bg-slider-handle: var(--vf-primary);
  --vf-bg-toggle-handle: #ffffff;
  --vf-bg-date-head: var(--vf-gray-100);
  --vf-bg-addon: #e9ecef;
  --vf-bg-btn: var(--vf-primary);
  --vf-bg-btn-danger: var(--vf-danger);
  --vf-bg-btn-secondary: var(--vf-gray-200);
  --vf-color-input: var(--vf-gray-700);
  --vf-color-input-focus: var(--vf-gray-700);
  --vf-color-input-hover: var(--vf-gray-700);
  --vf-color-input-danger: var(--vf-gray-700);
  --vf-color-input-success: var(--vf-gray-700);
  --vf-color-disabled: var(--vf-gray-700);
  --vf-color-placeholder: var(--vf-gray-600);
  --vf-color-passive: var(--vf-gray-700);
  --vf-color-muted: var(--vf-gray-600);
  --vf-color-floating: var(--vf-gray-600);
  --vf-color-floating-success: var(--vf-gray-600);
  --vf-color-floating-danger: var(--vf-gray-600);
  --vf-color-floating-focus: var(--vf-gray-600);
  --vf-color-danger: var(--vf-danger);
  --vf-color-success: var(--vf-success);
  --vf-color-tag: var(--vf-color-on-primary);
  --vf-color-addon: var(--vf-gray-700);
  --vf-color-date-head: var(--vf-gray-700);
  --vf-color-btn: var(--vf-color-on-primary);
  --vf-color-btn-danger: #ffffff;
  --vf-color-btn-secondary: var(--vf-gray-700);
  --vf-border-color-input: var(--vf-gray-400);
  --vf-border-color-input-focus: #80bdff;
  --vf-border-color-input-hover: var(--vf-gray-400);
  --vf-border-color-input-danger: var(--vf-gray-400);
  --vf-border-color-input-success: var(--vf-gray-400);
  --vf-border-color-checkbox: var(--vf-gray-400);
  --vf-border-color-checkbox-focus: #80bdff;
  --vf-border-color-checkbox-hover: var(--vf-gray-400);
  --vf-border-color-checkbox-danger: var(--vf-gray-400);
  --vf-border-color-checkbox-success: var(--vf-gray-400);
  --vf-border-color-checked: var(--vf-primary);
  --vf-border-color-passive: var(--vf-gray-300);
  --vf-border-color-slider-tooltip: var(--vf-primary);
  --vf-border-color-tag: var(--vf-primary);
  --vf-border-color-btn: var(--vf-primary);
  --vf-border-color-btn-danger: var(--vf-danger);
  --vf-border-color-btn-secondary: var(--vf-gray-200);
  --vf-border-color-blockquote: var(--vf-gray-400);
  --vf-border-color-hr: var(--vf-gray-600);
  --vf-border-color-signature-hr: var(--vf-gray-600);
  --vf-border-width-input-t: 1px;
  --vf-border-width-input-r: 1px;
  --vf-border-width-input-b: 1px;
  --vf-border-width-input-l: 1px;
  --vf-border-width-radio-t: 1px;
  --vf-border-width-radio-r: 1px;
  --vf-border-width-radio-b: 1px;
  --vf-border-width-radio-l: 1px;
  --vf-border-width-checkbox-t: 1px;
  --vf-border-width-checkbox-r: 1px;
  --vf-border-width-checkbox-b: 1px;
  --vf-border-width-checkbox-l: 1px;
  --vf-border-width-dropdown: 1px;
  --vf-border-width-btn: 1px;
  --vf-border-width-toggle: 0.125rem;
  --vf-border-width-tag: 1px;
  --vf-shadow-input: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  --vf-shadow-input-hover: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  --vf-shadow-input-focus: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  --vf-shadow-handles: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-shadow-handles-hover: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  --vf-shadow-handles-focus: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  --vf-shadow-btn: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  --vf-shadow-dropdown: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  --vf-radius-input: 0.25rem;
  --vf-radius-input-sm: 0.2rem;
  --vf-radius-input-lg: 0.3rem;
  --vf-radius-btn: 0.25rem;
  --vf-radius-btn-sm: 0.2rem;
  --vf-radius-btn-lg: 0.3rem;
  --vf-radius-small: 0.25rem;
  --vf-radius-small-sm: 0.2rem;
  --vf-radius-small-lg: 0.25rem;
  --vf-radius-large: 0.25rem;
  --vf-radius-large-sm: 0.2rem;
  --vf-radius-large-lg: 0.25rem;
  --vf-radius-tag: 0.25rem;
  --vf-radius-tag-sm: 0.2rem;
  --vf-radius-tag-lg: 0.25rem;
  --vf-radius-checkbox: 0.25rem;
  --vf-radius-checkbox-sm: 0.2rem;
  --vf-radius-checkbox-lg: 0.25rem;
  --vf-radius-slider: 0.25rem;
  --vf-radius-slider-sm: 0.2rem;
  --vf-radius-slider-lg: 0.25rem;
  --vf-radius-image: 0.25rem;
  --vf-radius-image-sm: 0.2rem;
  --vf-radius-image-lg: 0.25rem;
  --vf-radius-gallery: 0.25rem;
  --vf-radius-gallery-sm: 0.2rem;
  --vf-radius-gallery-lg: 0.25rem;
  --vf-checkbox-size: 1rem;
  --vf-checkbox-size-sm: 0.875rem;
  --vf-checkbox-size-lg: 1rem;
  --vf-gallery-size: 6rem;
  --vf-gallery-size-sm: 5rem;
  --vf-gallery-size-lg: 7rem;
  --vf-toggle-width: 3rem;
  --vf-toggle-width-sm: 2.75rem;
  --vf-toggle-width-lg: 3rem;
  --vf-toggle-height: 1.25rem;
  --vf-toggle-height-sm: 1.125rem;
  --vf-toggle-height-lg: 1.25rem;
  --vf-slider-height: 0.375rem;
  --vf-slider-height-sm: 0.3125rem;
  --vf-slider-height-lg: 0.5rem;
  --vf-slider-height-vertical: 20rem;
  --vf-slider-height-vertical-sm: 20rem;
  --vf-slider-height-vertical-lg: 20rem;
  --vf-slider-handle-size: 1rem;
  --vf-slider-handle-size-sm: 0.875rem;
  --vf-slider-handle-size-lg: 1.25rem;
  --vf-slider-tooltip-distance: 0.5rem;
  --vf-slider-tooltip-distance-sm: 0.375rem;
  --vf-slider-tooltip-distance-lg: 0.5rem;
  --vf-slider-tooltip-arrow-size: 0.3125rem;
  --vf-slider-tooltip-arrow-size-sm: 0.3125rem;
  --vf-slider-tooltip-arrow-size-lg: 0.3125rem;
  --vf-border-width-blockquote: 3px;
}
</style>
