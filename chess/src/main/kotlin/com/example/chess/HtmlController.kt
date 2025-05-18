package com.example.chess

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HtmlController {

  @GetMapping("/")
  fun chess(model: Model): String {
    model["title"] = "Chess"
    return "chess"
  }
}
