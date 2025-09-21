<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Ingresar reservación</title>
        <style>
            .error {
                color: red;
                font-size: 14px;
            }
        </style>
    </head>
    <body>

        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow">
                        <div class="card-header text-center bg-dark text-white">
                            <h4>Registro de Usuario</h4>
                        </div>
                        <div class="card-body">
                            <form id="form">
                                <!-- Nombre -->
                                <div class="mb-3">
                                    <label for="nombre" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="Ingresa tu nombre">
                                </div>
                                <!-- Apellido -->
                                <div class="mb-3">
                                    <label for="apellido" class="form-label">Apellido</label>
                                    <input type="text" class="form-control" id="apellido" placeholder="Ingresa tu apellido">
                                </div>
                                <!-- Correo electrónico -->
                                <div class="mb-3">
                                    <label for="email" class="form-label">Correo electrónico</label>
                                    <input type="email" class="form-control" id="email" placeholder="ejemplo@correo.com">
                                </div>
                                <!-- Teléfono -->
                                <div class="mb-3">
                                    <label for="telefono" class="form-label">Teléfono</label>
                                    <input type="tel" class="form-control" id="telefono" placeholder="123-456-7890">
                                </div>
                                <!-- Contraseña -->
                                <div class="mb-3">
                                    <label for="password" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña">
                                </div>
                                <!-- Confirmación de contraseña -->
                                <div class="mb-3">
                                    <label for="confirmPassword" class="form-label">Confirmar contraseña</label>
                                    <input type="password" class="form-control" id="confirmaPassword" placeholder="Repite tu contraseña">
                                </div>
                                <small id="mensajePassword" ></small>
                                <!-- Captcha simple -->
                                <div class="mb-3">
                                    <label class="form-label">Captcha: escribe el texto</label>
                                    <div class="mb-2 p-2 bg-light border text-center fw-bold">ABC123</div>
                                    <input type="text" class="form-control" placeholder="Ingresa el captcha">
                                </div>
                                <!-- Botón Registrarse -->
                                <div class="text-center">
                                    <button type="button" id="bntRegistrar" class="btn btn-dark px-4">Registrarse</button>
                                </div>
                                <!-- Mensaje de error -->
                                <div id="mensaje" class="mt-2 error"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="main.js"></script>
        <script type="text/javascript">
            
            let validaPass=document.getElementById("confirmaPassword");
            validaPass.addEventListener("input",function(){
            validaPassword();        
        });
            
            let btnRegistrarReservacion = document.querySelector("#bntRegistrar");

            btnRegistrarReservacion.addEventListener("click", function (event) {
                event.preventDefault();
                validarFormulario();
            });
            
            
            
            
        </script>
    

    </body>
</html>
