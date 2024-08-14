<script lang="ts">
  import FormButton from "../components/FormButton.svelte";
  import FormField from "../components/FormField.svelte";
  import FormSelect from "../components/FormSelect.svelte";
  import FormInput from "../components/FormInput.svelte";
  import {
    emailValidation,
    firstNameValidation,
    lastNameValidation,
    passwordValidation,
    prefixPhoneValidation,
    suffixPhoneValidation,
    validateField,
  } from "../services/formValidation";
  interface ErrorMessages {
    firstName?: string;
    lastName?: string;
    email?: string;
    prefixPhone?: string;
    suffixPhone?: string;
    password?: string;
  }
  let firstName: string = "";
  let lastName: string = "";
  let email: string = "";
  let password: string = "";
  let prefixPhone: string = "";
  let suffixPhone: string = "";
  let isFormSubmitted: boolean = false;
  let options: string[] = ["050", "052", "053", "054", "055", "058"];
  let errors: ErrorMessages = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    prefixPhone: "",
    suffixPhone: "",
  };
  $: {
    errors = validateField(
      firstName,
      errors,
      "firstName",
      firstNameValidation,
      handleFormErrorMessage
    );
  }
  $: {
    errors = validateField(
      lastName,
      errors,
      "lastName",
      lastNameValidation,
      handleFormErrorMessage
    );
  }
  $: {
    errors = validateField(
      email,
      errors,
      "email",
      emailValidation,
      handleFormErrorMessage
    );
  }
  $: {
    errors = validateField(
      password,
      errors,
      "password",
      passwordValidation,
      handleFormErrorMessage
    );
  }
  $: {
    errors = validateField(
      prefixPhone,
      errors,
      "prefixPhone",
      prefixPhoneValidation,
      handleFormErrorMessage
    );
  }
  $: {
    errors = validateField(
      suffixPhone,
      errors,
      "suffixPhone",
      suffixPhoneValidation,
      handleFormErrorMessage
    );
  }
  $: isFormSubmitted;

  function handleFormErrorMessage(field: keyof ErrorMessages) {
    switch (field) {
      case "firstName":
        return "Should not contain numbers. Should contain a minimum of 2 characters and up to 12.";
      case "lastName":
        return "Should not contain numbers. Should contain a minimum of 2 characters and up to 15.";
      case "email":
        return "Should be a valid email.";
      case "password":
        return "Password needs to contain at least 1 letter, number and special character (! @ # $ etc).";
      case "prefixPhone":
        return "Please select a phone prefix.";
      case "suffixPhone":
        return "Should only contain numbers - exactly 7 digits.";
    }
  }

  function handleSubmit() {
    isFormSubmitted = true;
    if (Object.keys(errors).length === 0) {
      console.log({
        firstName,
        lastName,
        email,
        password,
        phone: `${prefixPhone}${suffixPhone}`,
      });
    }
  }
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <FormField
      labelName="First Name"
      labelFor="firstName"
      errorMessage={isFormSubmitted || firstName ? errors.firstName : undefined}
    >
      <FormInput id="firstName" type="text" bind:currentValue={firstName} />
    </FormField>
    <FormField
      labelName="Last Name"
      labelFor="lastName"
      errorMessage={isFormSubmitted || lastName ? errors.lastName : undefined}
    >
      <FormInput id="lastName" type="text" bind:currentValue={lastName} />
    </FormField>
    <FormField
      labelName="Email"
      labelFor="email"
      errorMessage={isFormSubmitted || email ? errors.email : undefined}
    >
      <FormInput id="email" type="email" bind:currentValue={email} />
    </FormField>
    <FormField
      labelName="Phone Number"
      labelFor="suffixPhone"
      errorMessage={(isFormSubmitted || prefixPhone
        ? errors.prefixPhone
        : undefined) ||
        (isFormSubmitted || suffixPhone ? errors.suffixPhone : undefined)}
    >
      <FormSelect id="prefixPhone" bind:selectedValue={prefixPhone} {options} />
      <FormInput id="suffixPhone" type="text" bind:currentValue={suffixPhone} />
    </FormField>
    <FormField
      labelName="Password"
      labelFor="password"
      errorMessage={isFormSubmitted || password ? errors.password : undefined}
    >
      <FormInput id="password" type="password" bind:currentValue={password} />
    </FormField>
    <FormButton />
  </form>
</div>
