import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as session from 'express-session';
import { WsAdapter } from "@nestjs/platform-ws";
import { CustomIoAdapter } from "./shared/adapters/custom-io.adapter";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  
  app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  }));

  app.useWebSocketAdapter(new WsAdapter(app));
  const config = new DocumentBuilder()
    .setTitle("backend")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("Azamat")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  // await queueService.processJob()
  await app.listen(PORT, () => console.log(`server start on port = ${PORT}`));
}
start();
