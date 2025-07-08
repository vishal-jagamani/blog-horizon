package com.bloghorizon.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.convert.DefaultMongoTypeMapper;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;

@Configuration
public class MongoConfig {

    @Bean
    public MappingMongoConverter mappingMongoConverter(
            org.springframework.data.mongodb.MongoDatabaseFactory mongoDbFactory,
            MongoMappingContext context,
            MongoCustomConversions conversions) {

        MappingMongoConverter converter = new MappingMongoConverter(
                mongoDbFactory,
                context
        );
        converter.setCustomConversions(conversions);
        converter.setTypeMapper(new DefaultMongoTypeMapper(null)); // Removes _class
        return converter;
    }
}

