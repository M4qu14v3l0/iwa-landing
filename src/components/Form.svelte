<script>
    import emailjs from "@emailjs/browser";

    let sentMessage = false;

    function sendEmail(e) {
        emailjs
            .sendForm(
                "service_9n9mmqv",
                "template_4aqt93l",
                e.target,
                "_TMHiaJfNVMWSyBF8"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    sentMessage = true;
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    }
</script>

<section class="form-general-section" id="form_section">
    <div class={`${sentMessage ? "hidden-content" : "text-form"}`}>
        <div class="text-form">
            <h2>Contáctanos</h2>
            <p>Escríbenos un mensaje para brindarte asesoría personalizada</p>
        </div>
        <form class="form-section" on:submit|preventDefault={sendEmail}>
            <div class="inputs-container">
                <div class="input-form">
                    <input
                        type="text"
                        placeholder="Nombres"
                        name="name"
                        required
                        id="name"
                    />
                </div>
                <div class="input-form">
                    <input
                        type="text"
                        placeholder="Apellidos"
                        name="lastname"
                        required
                        id="lastname"
                    />
                </div>
                <div class="input-form">
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        name="email"
                        required
                        id="email"
                    />
                </div>
                <div class="input-form-number">
                    <div class="number-decoration">+51</div>
                    <input
                        type="number"
                        placeholder="Número de contacto"
                        name="phone"
                        required
                        id="phone"
                    />
                </div>
            </div>
            <div class="button-form">
                <button class="button-form-b">Enviar</button>
            </div>
        </form>
    </div>

    <div class={`${sentMessage ? "show-message" : "hidden-content"}`}>
        ¡Gracias por comunicarte! Te contactaremos muy pronto.
    </div>
</section>

<style>
    .form-general-section {
        margin-left: clamp(70px, 18%, 700px);
        margin-right: clamp(70px, 18%, 700px);
        margin-top: 200px;
        height: 60vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 40px;

        background-color: var(--tertiary);
        color: white;
    }

    .text-form {
        text-align: center;
    }

    .text-form h2 {
        font-size: clamp(20px, 4vw, 40px);
    }

    .form-section {
        margin: 0px auto;
        width: 70%;
        display: flex;
        flex-direction: column;

        gap: 40px;
    }

    .inputs-container {
        width: 100%;

        display: grid;
        grid-template-columns: 1fr 1fr;

        margin: 0px auto;

        width: fit-content;

        gap: 20px;
    }

    .input-form {
        position: relative;
        height: 60px;
        width: 300px;
        display: flex;
        flex-direction: column;
        border: none;
    }

    .input-form-number input {
        padding: 12px 12px;
        border: none;
        color: white;
        font-size: 18px;
        background-color: var(--purple);
        width: max-content;
    }

    .number-decoration {
        width: 57px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: var(--purple);
        border-right: 1px solid rgba(255, 255, 255, 0.6);
    }

    .input-form-number {
        position: relative;
        height: 60px;
        width: 100%;
        border: none;
        display: flex;
    }

    .input-form-number input::placeholder {
        color: white;
    }

    /* .input-form label {
        position: absolute;
        font-size: 12px;
        background-color: white;
        padding: 0px 10px;
        top: -9px;
        left: 20px;

        user-select: none;
    } */

    .input-form input {
        height: 100%;
        padding: 12px 18px;
        border: none;
        color: white;
        font-size: 18px;
        background-color: var(--purple);
    }

    .input-form input::placeholder {
        color: white;
    }

    .button-form {
        margin: 0px auto;
    }

    .button-form-b {
        width: 200px;
        height: 55px;

        font-family: "Poppins";
        position: relative;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        justify-content: center;
        transition: all 0.2s ease-in;
        font-size: 18px;
        cursor: pointer;
        background-color: white;
        color: var(--tertiary);

        border: none;
    }

    .button-form-b:hover {
        transform: translateY(-5px);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    select:-webkit-autofill,
    select:-webkit-autofill:hover {
        background-color: transparent;
        transition: background-color 5000s ease-in-out 0s;
    }

    input:-webkit-autofill {
        /* Personaliza el fondo y el color del texto */

        -webkit-text-fill-color: white !important; /* Cambia el color del texto a tu preferencia */
    }

    input:focus {
        outline: none; /* O outline: transparent; */
    }

    .hidden-content {
        display: none;
    }

    .show-message {
        display: flex;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        -webkit-animation: scale-in-center 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
    }

    @-webkit-keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }
    @keyframes scale-in-center {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1;
        }
    }

    @media (max-width: 1400px) {
        .inputs-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-general-section {
            margin-top: 100px;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 20px;

            padding-bottom: 60px;
        }

        .show-message {
            height: 600px;
        }
    }
    @media (max-width: 700px) {
        .inputs-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-general-section {
            margin-left: 40px;
            margin-right: 40px;
        }

        .show-message {
            padding: 0px 20px;
        }
    }
    @media (max-width: 560px) {
        .text-form {
            text-align: center;
            padding: 0px 20px;
        }

        .text-form h2 {
            font-size: 30px;
        }

        .form-general-section {
            margin-left: 20px;
            margin-right: 20px;
            height: 80vh;
        }

        .input-form {
            width: 100%;
        }

        .form-section {
            margin: 0px auto;
            width: 100%;
        }

        .button-form-b {
            width: 160px;
            height: 45px;
        }
    }

    @media (max-width: 380px) {
        .text-form {
            text-align: center;
            padding: 0px 5px;
        }

        .input-form {
            position: relative;
            width: 200px;
            display: flex;
            flex-direction: column;
            border: none;
        }

        .input-form-number input {
            width: 100%;
        }

        .number-decoration {
            display: none;
        }

        .input-form-number {
            width: 200px;
        }
    }
</style>
