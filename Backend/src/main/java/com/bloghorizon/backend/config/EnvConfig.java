package com.bloghorizon.backend.config;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("dev") // Only load when "dev" profile is active
@Configuration
public class EnvConfig {

    @PostConstruct
    public void loadEnv() {
        // Load from `.env` if present
        Dotenv dotenv = Dotenv.configure()
                .filename(".env")
                .ignoreIfMissing()
                .load();

        // Inject into system env so Spring can resolve with @Value or application.properties
        dotenv.entries().forEach(entry -> {
            System.setProperty(entry.getKey(), entry.getValue());
        });

        System.out.println("[✔] .env loaded into system environment (dev profile)");
    }
}