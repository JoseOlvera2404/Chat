import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationCode = async (
  email: string,
  code: string
) => {

  await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: "Código de acceso",
    html: `
    <div style="
      margin:0;
      padding:0;
      background:#0f172a;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color:#e2e8f0;
    ">

      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">

            <table width="520" cellpadding="0" cellspacing="0" style="
              background:linear-gradient(145deg, #020617, #1e293b);
              border-radius:16px;
              padding:40px;
              box-shadow:0 0 40px rgba(59,130,246,0.15);
            ">

              <!-- Header -->
              <tr>
                <td align="center" style="padding-bottom:20px;">
                  <h1 style="
                    margin:0;
                    font-size:22px;
                    letter-spacing:1px;
                    color:#38bdf8;
                  ">
                    Acceso seguro
                  </h1>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td align="center" style="padding-bottom:30px;">
                  <p style="
                    margin:0;
                    font-size:15px;
                    color:#94a3b8;
                  ">
                    Introduce este código para continuar con tu sesión
                  </p>
                </td>
              </tr>

              <!-- Code -->
              <tr>
                <td align="center">
                  <div style="
                    display:inline-block;
                    padding:18px 30px;
                    font-size:34px;
                    font-weight:700;
                    letter-spacing:10px;
                    border-radius:12px;
                    background:#020617;
                    border:1px solid rgba(56,189,248,0.3);
                    color:#38bdf8;
                    box-shadow:0 0 15px rgba(56,189,248,0.25);
                  ">
                    ${code}
                  </div>
                </td>
              </tr>

              <!-- Expiration -->
              <tr>
                <td align="center" style="padding-top:30px;">
                  <p style="
                    margin:0;
                    font-size:13px;
                    color:#64748b;
                  ">
                    Válido por 10 minutos
                  </p>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding:25px 0;">
                  <hr style="border:none;height:1px;background:#1e293b;">
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center">
                  <p style="
                    margin:0;
                    font-size:12px;
                    color:#475569;
                  ">
                    Si no reconoces esta solicitud, puedes ignorar este correo.
                  </p>
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </div>
    `
  });

};