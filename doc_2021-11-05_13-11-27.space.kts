job("Build production public client") {

    startOn {
        gitPush {
            branchFilter {
                +"refs/heads/master"
            }
        }
    }

    docker {
        env["SPACE_USER"] = Secrets("space_user")
        env["SPACE_TOKEN"] = Secrets("space_token")

        beforeBuildScript {
            content = """
                B64_AUTH=${'$'}(echo -n ${'$'}SPACE_USER:${'$'}SPACE_TOKEN | base64 -w 0)
                echo "{\"auths\":{\"https://lofthall.registry.jetbrains.space\":{\"auth\":\"${'$'}B64_AUTH\"}}}" > ${'$'}DOCKER_CONFIG/config.json
            """.trimIndent()
        }

        build {
            context = "."
            file = "./Dockerfile"
        }

        push("lofthall.registry.jetbrains.space/p/lofthall/main/client-public") {
            tags("latest", "1.0.\$JB_SPACE_EXECUTION_NUMBER")
        }
    }
}

job("Build staging public client") {

    startOn {
        gitPush {
            branchFilter {
                +"refs/heads/dev"
            }
        }
    }

    docker {
        env["SPACE_USER"] = Secrets("space_user")
        env["SPACE_TOKEN"] = Secrets("space_token")

        beforeBuildScript {
            content = """
                B64_AUTH=${'$'}(echo -n ${'$'}SPACE_USER:${'$'}SPACE_TOKEN | base64 -w 0)
                echo "{\"auths\":{\"https://lofthall.registry.jetbrains.space\":{\"auth\":\"${'$'}B64_AUTH\"}}}" > ${'$'}DOCKER_CONFIG/config.json
            """.trimIndent()
        }

        build {
            context = "."
            file = "./Dockerfile"
        }

        push("lofthall.registry.jetbrains.space/p/lofthall/main/client-public") {
            tags("latest-staging", "1.0.\$JB_SPACE_EXECUTION_NUMBER")
        }
    }
}
