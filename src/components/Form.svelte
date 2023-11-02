<script>
    import emailjs from "@emailjs/browser";
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
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    }
</script>

<section class="form-general-section" id="form_section">
    <h2>Contáctanos</h2>
    <form class="form-section" on:submit|preventDefault={sendEmail}>
        <div class="inputs-container">
            <div class="input-form">
                <label for="name">Nombres</label>
                <input
                    type="text"
                    placeholder=""
                    name="name"
                    required
                    id="name"
                />
            </div>
            <div class="input-form">
                <label for="lastname">Apellidos</label>
                <input
                    type="text"
                    placeholder=""
                    name="lastname"
                    required
                    id="lastname"
                />
            </div>
            <div class="input-form">
                <label for="email">Correo Electrónico</label>
                <input
                    type="email"
                    placeholder=""
                    name="email"
                    required
                    id="email"
                />
            </div>
            <div class="input-form">
                <label for="phone">Nímero de contacto</label>
                <input
                    type="number"
                    placeholder=""
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
</section>

<style>
    .form-general-section {
        margin-left: clamp(70px, 18%, 700px);
        margin-right: clamp(70px, 18%, 700px);
        margin-top: 200px;
        height: 50vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
    }

    .form-general-section h2 {
        text-align: center;
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
        height: 40px;
        width: 300px;
        display: flex;
        flex-direction: column;

        border-radius: 10px;
        border: 1px solid;
    }

    .input-form label {
        position: absolute;
        font-size: 12px;
        background-color: white;
        padding: 0px 10px;
        top: -9px;
        left: 20px;

        user-select: none;
    }

    .input-form input {
        border-radius: 10px;
        height: 100%;
        padding: 12px 18px;
        border: none;
    }

    .button-form {
        margin: 0px auto;
    }
    
    .button-form-b {
        width: 256px;
        height: 55px;
        
        font-family: 'Poppins';
        position: relative;
        border-radius: 10px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        justify-content: center;
        transition: all 0.2s ease-in;

        background-color: #fae053;
        color: black;
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

    input:focus {
        outline: none; /* O outline: transparent; */
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
    }
    @media (max-width: 560px) {
        .form-general-section {
            margin-left: 20px;
            margin-right: 20px;
            height: 30vh;
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
</style>
