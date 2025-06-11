package com.bloghorizon.backend.config;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class EnvConfig {
    @Autowired
    private Environment env;

    @PostConstruct
    public void loadEnv() {
        // Load from `.env` if present
        Dotenv dotenv = Dotenv.configure()
                .filename(".env")          // Optional if default name
                .ignoreIfMissing()         // Don't crash if .env not found (e.g., in EC2)
                .load();

        // Inject into system env so Spring can resolve with @Value or application.properties
        dotenv.entries().forEach(entry -> {
            System.setProperty(entry.getKey(), entry.getValue());
        });

//        String mongoUri = env.getProperty("MONGODB_URI");
//        System.out.println("🔌 MONGODB_URI (via Spring env): " + mongoUri);
//        System.out.println("ALL: " + System.getProperties());
        System.out.println("[✔] .env loaded and environment variables set");
    }
}

