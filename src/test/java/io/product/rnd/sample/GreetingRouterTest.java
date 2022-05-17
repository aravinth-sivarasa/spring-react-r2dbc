package io.product.rnd.sample;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;

import io.product.rnd.sample.greeting.Greeting;
import reactor.core.publisher.Mono;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GreetingRouterTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    @WithUserDetails(value = "admin")
    public void get() {
        webTestClient
                .get().uri("/v1/hello")
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isOk()
                .expectBody(List.class).value(values -> {
                    Integer size = values.size();
                    assertThat(size).isZero();
                });
    }

    @Test
    @WithUserDetails(value = "admin")
    // @Transactional // This will rollback the transation after test execution
    public void post() {
        Greeting greeting = new Greeting("Test message");
        webTestClient
                .post().uri("/v1/hello")
                .accept(MediaType.APPLICATION_JSON)
                .body(Mono.just(greeting), Greeting.class)
                .exchange()
                .expectStatus().isOk()
                .expectBody(Greeting.class).value(value -> {
                    assertThat(value.getMessage()).isEqualTo(greeting.getMessage());
                });
    }

}
